/* sim-core.js — shared helpers for the interactive simulation pages.
   Keeps each simulation file lean: standard Desmos calculator, slider wiring,
   and play/pause/reset controls. Bespoke expressions + schematics live per page. */
(function(global){
  function makeCalc(elId, xlabel, ylabel){
    var calc = Desmos.GraphingCalculator(document.getElementById(elId), {
      expressions:false, settingsMenu:false, zoomButtons:true, lockViewport:false, border:false, keypad:false
    });
    if(xlabel!==undefined) calc.updateSettings({xAxisLabel:xlabel, yAxisLabel:ylabel||''});
    return calc;
  }
  /* Wire every .ctl slider. S = state object (holds current values + defaults).
     LATEX maps var -> Desmos variable name (omit a var to keep it JS-only).
     onChange(varName) runs after each input. Returns a map varName -> {input,out,def,...}. */
  function wireSliders(calc, S, LATEX, onChange){
    var sliders={};
    [].slice.call(document.querySelectorAll('.ctl')).forEach(function(c){
      var v=c.dataset.var, input=c.querySelector('input'), out=c.querySelector('.val'),
          fx=+c.dataset.fixed, suf=c.dataset.suffix||'';
      input.min=+c.dataset.min; input.max=+c.dataset.max; input.step=+c.dataset.step; input.value=S[v];
      sliders[v]={input:input,out:out,fx:fx,def:S[v],suf:suf};
      input.addEventListener('input',function(){
        S[v]=+input.value; if(out) out.textContent=(+input.value).toFixed(fx)+suf;
        if(LATEX && LATEX[v]!==undefined) calc.setExpression({id:v,latex:LATEX[v]+'='+(+input.value)});
        onChange(v);
      });
      if(out) out.textContent=(+S[v]).toFixed(fx)+suf;
    });
    return sliders;
  }
  /* requestAnimationFrame ticker: calls fn roughly every ms milliseconds while the tab
     is VISIBLE, and pauses automatically in hidden tabs (rAF never fires there).
     Returns {stop} to cancel. Use this instead of setInterval for any animation. */
  function loop(fn, ms){
    var last=0, id=null, live=true, gap=ms||40;
    function frame(t){ if(!live) return; if(t-last>=gap){ last=t; fn(); } id=requestAnimationFrame(frame); }
    id=requestAnimationFrame(frame);
    return { stop:function(){ live=false; if(id!==null) cancelAnimationFrame(id); } };
  }
  /* Play / Pause / Reset tied to a time slider 'tvar'. opt.inc overrides the per-tick step.
     Runs on SimCore.loop, so playback halts in hidden tabs instead of burning CPU. */
  function playControls(sliders, tvar, opt){
    opt=opt||{};
    var playing=false, anim=null, btn=document.getElementById('play'), rst=document.getElementById('reset');
    var label=opt.label||'▶ Play';
    function step(){ var s=sliders[tvar], mx=+s.input.max, inc=opt.inc || mx/70;
      var val=+s.input.value+inc; if(val>mx)val=0; s.input.value=val; s.input.dispatchEvent(new Event('input')); }
    function stop(){ playing=false; if(anim){anim.stop(); anim=null;} if(btn)btn.textContent=label; }
    if(btn) btn.addEventListener('click',function(){
      if(playing){ stop(); } else { playing=true; btn.textContent='❚❚ Pause'; anim=loop(step,opt.ms||40); } });
    if(rst) rst.addEventListener('click',function(){ stop();
      Object.keys(sliders).forEach(function(v){ sliders[v].input.value=sliders[v].def; sliders[v].input.dispatchEvent(new Event('input')); }); });
  }
  global.SimCore={makeCalc:makeCalc, wireSliders:wireSliders, playControls:playControls, loop:loop};
})(window);

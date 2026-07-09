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
  /* Play / Pause / Reset tied to a time slider 'tvar'. opt.inc overrides the per-tick step. */
  function playControls(sliders, tvar, opt){
    opt=opt||{};
    var playing=false,timer=null, btn=document.getElementById('play'), rst=document.getElementById('reset');
    var label=opt.label||'▶ Play';
    function step(){ var s=sliders[tvar], mx=+s.input.max, inc=opt.inc || mx/70;
      var val=+s.input.value+inc; if(val>mx)val=0; s.input.value=val; s.input.dispatchEvent(new Event('input')); }
    if(btn) btn.addEventListener('click',function(){ playing=!playing; btn.textContent=playing?'❚❚ Pause':label; if(playing)timer=setInterval(step,opt.ms||40); else clearInterval(timer); });
    if(rst) rst.addEventListener('click',function(){ playing=false; clearInterval(timer); if(btn)btn.textContent=label;
      Object.keys(sliders).forEach(function(v){ sliders[v].input.value=sliders[v].def; sliders[v].input.dispatchEvent(new Event('input')); }); });
  }
  global.SimCore={makeCalc:makeCalc, wireSliders:wireSliders, playControls:playControls};
})(window);

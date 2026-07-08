# Physics 4B Simulation 6: RC Charging and Discharging Curves

## Learning Objective
Compare capacitor voltage, charge, and current during charging and discharging.

## Desmos Notebook Build Steps
1. Open Desmos Notebook.
2. Add this title and learning objective as text.
3. Add the slider variables below as Expression items.
4. For each slider variable, choose Variable Options -> Add Slider.
5. Add a 2D Graph item.
6. Paste the expression list into the graph sidebar.
7. Set the graph window using the suggested bounds.
8. Add the Predict -> Manipulate -> Explain -> Calculate -> Extend prompts.
9. Preview, save, and share the Notebook link to Canvas.

## Slider Variables
- `R = 1000`; range `100` to `10000`; step `100`; note: resistance in ohms
- `C = 0.001`; range `0.0001` to `0.01`; step `0.0001`; note: capacitance in farads
- `V_0 = 10`; range `1` to `20`; step `0.5`; note: battery voltage or initial capacitor voltage
- `t = 0`; range `0` to `20`; step `0.05`; note: animation time

## Suggested Graph Window
- left: `0`
- right: `20`
- bottom: `-2`
- top: `12`

## Paste-Ready Desmos Expressions
1. `tau=R*C`
2. `V_ch(s)=V_0(1-e^(-s/tau))`
3. `V_dis(s)=V_0e^(-s/tau)`
4. `I_ch(s)=V_0/R*e^(-s/tau)`
5. `I_dis(s)=-V_0/R*e^(-s/tau)`
6. `s=[0,0.05...20]`
7. `(s,V_ch(s))`
8. `(s,V_dis(s))`
9. `(t,V_ch(t))`
10. `(t,V_dis(t))`
11. `x=tau`

## Student Tutorial Prompts
### Predict
Predict the capacitor voltage after one time constant.

### Manipulate
Change R and C and observe how tau changes.

### Explain
Explain why increasing R or C slows the charging process.

### Calculate
Compute tau and V_C at t=tau for the current parameters.

### Extend
Add an expression for charge q(t)=CV_C(t).


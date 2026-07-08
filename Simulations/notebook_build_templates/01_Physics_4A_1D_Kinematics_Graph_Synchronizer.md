# Physics 4A Simulation 1: 1D Kinematics Graph Synchronizer

## Learning Objective
Connect position, velocity, and acceleration graphs for constant-acceleration motion.

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
- `x_0 = 0`; range `-20` to `20`; step `1`; note: initial position
- `v_0 = 5`; range `-20` to `20`; step `1`; note: initial velocity
- `a = -1`; range `-10` to `10`; step `0.5`; note: constant acceleration
- `t = 0`; range `0` to `10`; step `0.05`; note: animation time

## Suggested Graph Window
- left: `0`
- right: `10`
- bottom: `-20`
- top: `40`

## Paste-Ready Desmos Expressions
1. `x(t)=x_0+v_0t+0.5at^2`
2. `v(t)=v_0+at`
3. `A(t)=a`
4. `s=[0,0.1...10]`
5. `(s,x(s))`
6. `(s,v(s))`
7. `(s,A(s))`
8. `(t,x(t))`
9. `(t,v(t))`
10. `(t,A(t))`

## Student Tutorial Prompts
### Predict
Predict how the position-time graph changes when acceleration changes sign.

### Manipulate
Animate t and vary x_0, v_0, and a.

### Explain
Explain how slope of x(t) relates to v(t), and slope of v(t) relates to a(t).

### Calculate
For the current sliders, calculate x, v, and a at t = 3 s.

### Extend
Add a second object with different initial conditions and find when they meet.


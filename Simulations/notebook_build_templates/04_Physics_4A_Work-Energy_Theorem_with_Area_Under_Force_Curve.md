# Physics 4A Simulation 4: Work-Energy Theorem with Area Under Force Curve

## Learning Objective
Visualize work as area under F(x) and connect work to change in kinetic energy.

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
- `F_0 = 5`; range `-20` to `20`; step `1`; note: constant force term
- `k = 1`; range `-5` to `5`; step `0.1`; note: linear force coefficient
- `x_i = 0`; range `-5` to `5`; step `0.1`; note: initial position
- `x_f = 4`; range `-5` to `5`; step `0.1`; note: final position
- `m = 2`; range `0.5` to `10`; step `0.5`; note: mass
- `v_i = 1`; range `0` to `20`; step `0.5`; note: initial speed

## Suggested Graph Window
- left: `-6`
- right: `6`
- bottom: `-20`
- top: `30`

## Paste-Ready Desmos Expressions
1. `F(x)=F_0+kx`
2. `W=F_0(x_f-x_i)+0.5k(x_f^2-x_i^2)`
3. `K_i=0.5mv_i^2`
4. `K_f=K_i+W`
5. `v_f=sqrt(max(0,2K_f/m))`
6. `y=F(x){min(x_i,x_f)<=x<=max(x_i,x_f)}`
7. `0<=y<=F(x){min(x_i,x_f)<=x<=max(x_i,x_f)}`
8. `(x_i,0)`
9. `(x_f,0)`

## Student Tutorial Prompts
### Predict
Predict whether the work is positive or negative for the current x_i and x_f.

### Manipulate
Change F_0 and k and watch the area under F(x).

### Explain
Explain why negative area corresponds to negative work.

### Calculate
Compute W and v_f for the current parameters.

### Extend
Replace F(x) with a nonlinear force and approximate the area numerically.


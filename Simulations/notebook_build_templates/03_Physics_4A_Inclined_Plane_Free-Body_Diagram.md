# Physics 4A Simulation 3: Inclined Plane Free-Body Diagram

## Learning Objective
Resolve gravity into parallel and perpendicular components on an incline.

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
- `m = 5`; range `1` to `20`; step `0.5`; note: mass
- `theta = 30`; range `0` to `60`; step `1`; note: incline angle in degrees
- `mu_k = 0.2`; range `0` to `1`; step `0.05`; note: kinetic friction coefficient
- `g = 9.8`; range `1` to `20`; step `0.1`; note: gravitational field strength

## Suggested Graph Window
- left: `-1`
- right: `10`
- bottom: `-5`
- top: `8`

## Paste-Ready Desmos Expressions
1. `theta_r=theta*pi/180`
2. `W=mg`
3. `N=mgcos(theta_r)`
4. `F_parallel=mgsin(theta_r)`
5. `f_k=mu_kN`
6. `a=g(sin(theta_r)-mu_kcos(theta_r))`
7. `y=tan(theta_r)x{0<=x<=8}`
8. `P=(4,4tan(theta_r))`
9. `[(4,4tan(theta_r)),(4,4tan(theta_r)-W/10)]`
10. `[(4,4tan(theta_r)),(4+F_parallel*cos(theta_r)/10,4tan(theta_r)-F_parallel*sin(theta_r)/10)]`
11. `[(4,4tan(theta_r)),(4-N*sin(theta_r)/10,4tan(theta_r)+N*cos(theta_r)/10)]`

## Student Tutorial Prompts
### Predict
Predict how the acceleration changes as theta increases.

### Manipulate
Vary theta and mu_k and observe the force components.

### Explain
Explain why mass cancels from the acceleration for this model.

### Calculate
Calculate N, F_parallel, f_k, and a for the current slider values.

### Extend
Add static friction and determine the angle at which the block begins to slide.


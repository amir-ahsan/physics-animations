# Physics 4A Simulation 2: Projectile Motion with Velocity Components

## Learning Objective
Visualize projectile motion, range, maximum height, time of flight, and velocity components.

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
- `v_0 = 20`; range `0` to `50`; step `1`; note: launch speed
- `theta = 45`; range `0` to `90`; step `1`; note: launch angle in degrees
- `g = 9.8`; range `1` to `20`; step `0.1`; note: gravitational field strength
- `t = 0`; range `0` to `10`; step `0.05`; note: animation time

## Suggested Graph Window
- left: `0`
- right: `60`
- bottom: `0`
- top: `30`

## Paste-Ready Desmos Expressions
1. `theta_r=theta*pi/180`
2. `x(s)=v_0cos(theta_r)s`
3. `y(s)=v_0sin(theta_r)s-0.5gs^2`
4. `t_f=2v_0sin(theta_r)/g`
5. `R=v_0^2sin(2theta_r)/g`
6. `H=(v_0sin(theta_r))^2/(2g)`
7. `(x(s),y(s)){0<=s<=t_f}`
8. `(x(t),y(t)){0<=t<=t_f}`
9. `v_x=v_0cos(theta_r)`
10. `v_y(t)=v_0sin(theta_r)-gt`
11. `[(x(t),y(t)),(x(t)+v_x/5,y(t))]{0<=t<=t_f}`
12. `[(x(t),y(t)),(x(t),y(t)+v_y(t)/5)]{0<=t<=t_f}`
13. `[(x(t),y(t)),(x(t)+v_x/5,y(t)+v_y(t)/5)]{0<=t<=t_f}`

## Student Tutorial Prompts
### Predict
Predict which launch angle gives maximum range when launch and landing heights are equal.

### Manipulate
Vary theta from 10 degrees to 80 degrees and observe the range.

### Explain
Explain why complementary angles can produce the same range.

### Calculate
Calculate R, H, and t_f for v_0 = 20 m/s and theta = 45 degrees.

### Extend
Modify y(s) to include a nonzero launch height y_0.


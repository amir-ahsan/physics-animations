# Physics 4B Simulation 7: Charged Particle in a Uniform Magnetic Field

## Learning Objective
Visualize circular motion of a charged particle moving perpendicular to a magnetic field.

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
- `m = 1`; range `0.5` to `10`; step `0.5`; note: particle mass in scaled units
- `q = 1`; range `-5` to `5`; step `0.5`; note: particle charge in scaled units
- `v = 5`; range `0` to `15`; step `0.5`; note: speed
- `B = 1`; range `0.1` to `5`; step `0.1`; note: magnetic field
- `t = 0`; range `0` to `20`; step `0.05`; note: animation time

## Suggested Graph Window
- left: `-15`
- right: `15`
- bottom: `-15`
- top: `15`

## Paste-Ready Desmos Expressions
1. `r=m*v/(abs(q)*B)`
2. `omega=q*B/m`
3. `x(s)=r*cos(omega*s)`
4. `y(s)=r*sin(omega*s)`
5. `(x(s),y(s)){0<=s<=t}`
6. `(x(t),y(t))`
7. `[(x(t),y(t)),(x(t)-sin(omega*t),y(t)+cos(omega*t))]`
8. `[(x(t),y(t)),(x(t)-cos(omega*t),y(t)-sin(omega*t))]`

## Student Tutorial Prompts
### Predict
Predict how the radius changes if the speed doubles.

### Manipulate
Change q, m, v, and B and observe the circular path.

### Explain
Explain how the sign of q changes the direction of rotation.

### Calculate
Calculate r and omega for the current parameters.

### Extend
Add an electric field to create drift-like motion conceptually.


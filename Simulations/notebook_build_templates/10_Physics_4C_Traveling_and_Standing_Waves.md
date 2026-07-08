# Physics 4C Simulation 10: Traveling and Standing Waves

## Learning Objective
Compare a traveling wave with a standing wave formed by superposition.

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
- `A = 1`; range `0` to `5`; step `0.1`; note: amplitude
- `lambda = 4`; range `1` to `10`; step `0.1`; note: wavelength
- `f = 1`; range `0.1` to `5`; step `0.1`; note: frequency
- `t = 0`; range `0` to `10`; step `0.02`; note: animation time

## Suggested Graph Window
- left: `0`
- right: `20`
- bottom: `-5`
- top: `5`

## Paste-Ready Desmos Expressions
1. `k=2pi/lambda`
2. `omega=2pi*f`
3. `y_travel(x)=A*sin(k*x-omega*t)`
4. `y_left(x)=A*sin(k*x+omega*t)`
5. `y_stand(x)=y_travel(x)+y_left(x)`
6. `y=y_travel(x)`
7. `y=y_stand(x)`
8. `v=f*lambda`

## Student Tutorial Prompts
### Predict
Predict how the wave changes when frequency increases while wavelength is fixed.

### Manipulate
Animate t and compare traveling and standing waves.

### Explain
Explain nodes and antinodes in the standing wave.

### Calculate
Calculate wave speed v=f lambda for the current parameters.

### Extend
Restrict the string to length L and show only allowed harmonics.


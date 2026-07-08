# Physics 4C Simulation 11: Single-Slit Diffraction and Double-Slit Interference

## Learning Objective
Explore how wavelength, slit width, and slit separation affect intensity patterns.

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
- `lambda = 0.5`; range `0.1` to `1`; step `0.01`; note: wavelength in scaled units
- `a = 1`; range `0.1` to `5`; step `0.1`; note: slit width
- `d = 3`; range `0.5` to `10`; step `0.1`; note: slit separation

## Suggested Graph Window
- left: `-5`
- right: `5`
- bottom: `0`
- top: `1.2`

## Paste-Ready Desmos Expressions
1. `beta(x)=pi*a*x/lambda`
2. `alpha(x)=pi*d*x/lambda`
3. `I_single(x)=(sin(beta(x))/beta(x))^2`
4. `I_double(x)=cos(alpha(x))^2*(sin(beta(x))/beta(x))^2`
5. `I_single(0)=1`
6. `I_double(0)=1`
7. `y=I_single(x)`
8. `y=I_double(x)`

## Student Tutorial Prompts
### Predict
Predict what happens to fringe spacing when wavelength increases.

### Manipulate
Adjust lambda, a, and d.

### Explain
Explain the difference between the diffraction envelope and interference fringes.

### Calculate
Find the first single-slit minimum for the current parameters.

### Extend
Add screen distance L and convert angle to physical screen position.


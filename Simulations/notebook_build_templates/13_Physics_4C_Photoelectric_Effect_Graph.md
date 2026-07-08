# Physics 4C Simulation 13: Photoelectric Effect Graph

## Learning Objective
Graph maximum kinetic energy versus light frequency and identify threshold frequency.

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
- `phi = 2`; range `0.5` to `6`; step `0.1`; note: work function in eV
- `h = 4.14`; range `3` to `5`; step `0.01`; note: Planck constant in eV fs scaled so f is in PHz
- `f = 1`; range `0` to `3`; step `0.01`; note: frequency in PHz

## Suggested Graph Window
- left: `0`
- right: `3`
- bottom: `0`
- top: `8`

## Paste-Ready Desmos Expressions
1. `K(f)=max(0,h*f-phi)`
2. `f_0=phi/h`
3. `y=K(x)`
4. `(f,K(f))`
5. `x=f_0`

## Student Tutorial Prompts
### Predict
Predict what happens below the threshold frequency.

### Manipulate
Change phi and observe the threshold frequency.

### Explain
Explain why increasing intensity alone does not change K_max in the model.

### Calculate
Calculate f_0 and K_max for a selected frequency.

### Extend
Add stopping potential V_s=K_max/e in electron-volts.


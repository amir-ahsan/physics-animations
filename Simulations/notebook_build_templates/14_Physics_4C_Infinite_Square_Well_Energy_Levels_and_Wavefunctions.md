# Physics 4C Simulation 14: Infinite Square Well Energy Levels and Wavefunctions

## Learning Objective
Visualize quantized wavefunctions and energy levels in a one-dimensional infinite well.

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
- `L = 1`; range `0.5` to `5`; step `0.1`; note: well length
- `n = 1`; range `1` to `8`; step `1`; note: quantum number
- `A = 1`; range `0.2` to `3`; step `0.1`; note: wavefunction scale

## Suggested Graph Window
- left: `-0.5`
- right: `5.5`
- bottom: `-3`
- top: `8`

## Paste-Ready Desmos Expressions
1. `psi(x)=A*sin(n*pi*x/L){0<=x<=L}`
2. `E_n=n^2/L^2`
3. `y=psi(x)`
4. `y=E_n/10{0<=x<=L}`
5. `x=0`
6. `x=L`
7. `N=[1,2,3,4,5,6,7,8]`
8. `y=N^2/L^2/10{0<=x<=L}`

## Student Tutorial Prompts
### Predict
Predict how the number of nodes changes as n increases.

### Manipulate
Change n and L and observe wavefunctions and energy levels.

### Explain
Explain why energy grows like n^2 and decreases when L increases.

### Calculate
Compute relative energies E_2/E_1 and E_3/E_1.

### Extend
Add probability density |psi(x)|^2.


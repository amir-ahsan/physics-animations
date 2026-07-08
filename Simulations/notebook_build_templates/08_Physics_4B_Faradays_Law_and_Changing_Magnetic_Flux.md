# Physics 4B Simulation 8: Faraday's Law and Changing Magnetic Flux

## Learning Objective
Connect changing magnetic flux through a loop to induced emf.

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
- `B_0 = 2`; range `0` to `5`; step `0.1`; note: magnetic field amplitude
- `A = 1`; range `0.1` to `5`; step `0.1`; note: loop area
- `omega = 1`; range `0.1` to `5`; step `0.1`; note: angular frequency
- `t = 0`; range `0` to `20`; step `0.05`; note: animation time

## Suggested Graph Window
- left: `0`
- right: `20`
- bottom: `-10`
- top: `10`

## Paste-Ready Desmos Expressions
1. `Phi(s)=A*B_0*cos(omega*s)`
2. `emf(s)=A*B_0*omega*sin(omega*s)`
3. `s=[0,0.05...20]`
4. `(s,Phi(s))`
5. `(s,emf(s))`
6. `(t,Phi(t))`
7. `(t,emf(t))`

## Student Tutorial Prompts
### Predict
Predict when the induced emf is largest relative to the flux graph.

### Manipulate
Vary omega and observe changes in emf amplitude.

### Explain
Explain why emf is related to the negative rate of change of flux.

### Calculate
Calculate maximum emf for the current B_0, A, and omega.

### Extend
Replace B(t) with a linear ramp and compare the emf.


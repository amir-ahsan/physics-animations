# Physics 4C Simulation 12: Thin Lens Ray Diagram and Lens Equation

## Learning Objective
Use the lens equation to visualize real and virtual images.

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
- `f = 3`; range `-8` to `8`; step `0.5`; note: focal length; positive for converging lens
- `d_o = 8`; range `1` to `20`; step `0.5`; note: object distance
- `h_o = 2`; range `0.5` to `5`; step `0.5`; note: object height

## Suggested Graph Window
- left: `-20`
- right: `20`
- bottom: `-10`
- top: `10`

## Paste-Ready Desmos Expressions
1. `d_i=1/(1/f-1/d_o)`
2. `m=-d_i/d_o`
3. `h_i=m*h_o`
4. `x=0`
5. `(-d_o,0)`
6. `(-d_o,h_o)`
7. `(d_i,0)`
8. `(d_i,h_i)`
9. `[(-d_o,0),(-d_o,h_o)]`
10. `[(d_i,0),(d_i,h_i)]`
11. `[(-d_o,h_o),(0,h_o),(d_i,h_i)]`
12. `[(-d_o,h_o),(0,0),(d_i,h_i)]`
13. `(f,0)`
14. `(-f,0)`

## Student Tutorial Prompts
### Predict
Predict whether the image is real or virtual before moving sliders.

### Manipulate
Move d_o across the focal point.

### Explain
Explain how the sign of d_i relates to real and virtual images.

### Calculate
Use the lens equation to calculate d_i and magnification.

### Extend
Create a similar graph for mirrors by changing the sign convention.


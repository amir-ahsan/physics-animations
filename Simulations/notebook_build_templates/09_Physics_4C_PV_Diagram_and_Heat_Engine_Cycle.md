# Physics 4C Simulation 9: PV Diagram and Heat Engine Cycle

## Learning Objective
Visualize work as enclosed area on a PV diagram.

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
- `P_1 = 2`; range `0.5` to `10`; step `0.5`; note: low pressure
- `P_2 = 6`; range `0.5` to `10`; step `0.5`; note: high pressure
- `V_1 = 1`; range `0.5` to `10`; step `0.5`; note: low volume
- `V_2 = 5`; range `0.5` to `10`; step `0.5`; note: high volume

## Suggested Graph Window
- left: `0`
- right: `10`
- bottom: `0`
- top: `10`

## Paste-Ready Desmos Expressions
1. `W=(P_2-P_1)*(V_2-V_1)`
2. `[(V_1,P_1),(V_2,P_1),(V_2,P_2),(V_1,P_2),(V_1,P_1)]`
3. `y=P_1{V_1<=x<=V_2}`
4. `y=P_2{V_1<=x<=V_2}`
5. `x=V_1{P_1<=y<=P_2}`
6. `x=V_2{P_1<=y<=P_2}`

## Student Tutorial Prompts
### Predict
Predict whether the cycle is clockwise or counterclockwise and the sign of work.

### Manipulate
Change P_1, P_2, V_1, and V_2.

### Explain
Explain why the area inside the cycle represents net work.

### Calculate
Calculate W for the current slider values.

### Extend
Create a Carnot-like cycle with isothermal and adiabatic curves.


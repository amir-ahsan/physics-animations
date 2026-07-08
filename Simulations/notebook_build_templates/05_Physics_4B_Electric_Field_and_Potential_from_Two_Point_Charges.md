# Physics 4B Simulation 5: Electric Field and Potential from Two Point Charges

## Learning Objective
Visualize electric potential contours and field vectors from point charges.

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
- `q_1 = 1`; range `-5` to `5`; step `0.5`; note: charge 1
- `q_2 = -1`; range `-5` to `5`; step `0.5`; note: charge 2
- `a = 2`; range `0.5` to `5`; step `0.1`; note: charge separation parameter
- `S = 0.4`; range `0.1` to `2`; step `0.1`; note: field vector scale

## Suggested Graph Window
- left: `-6`
- right: `6`
- bottom: `-6`
- top: `6`

## Paste-Ready Desmos Expressions
1. `r_1(x,y)=sqrt((x+a)^2+y^2)`
2. `r_2(x,y)=sqrt((x-a)^2+y^2)`
3. `V(x,y)=q_1/r_1(x,y)+q_2/r_2(x,y)`
4. `V(x,y)=c`
5. `c=[-3,-2,-1,-0.5,0.5,1,2,3]`
6. `E_x(x,y)=q_1(x+a)/r_1(x,y)^3+q_2(x-a)/r_2(x,y)^3`
7. `E_y(x,y)=q_1y/r_1(x,y)^3+q_2y/r_2(x,y)^3`
8. `X=[-4,-3,-2,-1,0,1,2,3,4]`
9. `Y=[-4,-3,-2,-1,0,1,2,3,4]`
10. `[(X,Y),(X+S*E_x(X,Y),Y+S*E_y(X,Y))]`
11. `(-a,0)`
12. `(a,0)`

## Student Tutorial Prompts
### Predict
Predict the field direction at the midpoint between opposite charges.

### Manipulate
Change q_1 and q_2 to make a dipole, two positive charges, and two negative charges.

### Explain
Explain how equipotential curves relate to electric field direction.

### Calculate
Calculate the electric field at the origin for q_1=1, q_2=-1, a=2 in scaled units.

### Extend
Add a third charge and observe how the field changes.


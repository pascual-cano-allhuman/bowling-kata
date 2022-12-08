## Bowling Rules

The game consists of 10 frames. In each frame the player has two rolls to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two rolls. The bonus for that frame is the number of pins knocked down by the next roll.

A strike is when the player knocks down all 10 pins on his first roll. The frame is then completed with a single roll. The bonus for that frame is the value of the next two rolls.

If the player gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.

## Requirements

Write a function calculating the score for a bowling game.

Example of anotated games. When scoring “X” indicates a strike, “/” indicates a spare:

`0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0` (the worst game possible, 0 points)

`9-0 9-0 9-0 9-0 9-0 9-0 9-0 9-0 9-0 9-0` (20 rolls, 10 pars of 9 and a miss, 90 points)

`5-/ 5-/ 5-/ 5-/ 5-/ 5-/ 5-/ 5-/ 5-/ 5-/-5` (21 rolls, 10 pairs of 5 and spare with and additional roll, 150 points)

`X X X X X X X X X X-X-X` (the perfect game with 2 extra rolls, 300 points)

# workshop-0
setup
## URL
https://clementine0507.github.io/workshop-0/
### Notes

![7654ce26ff1403f2cde58cd9e2f3496](https://github.com/user-attachments/assets/a3b5a52c-feed-4511-a5db-4a001e3d3906)

![dfa98e71f4ca25ad750e89e679e31f2](https://github.com/user-attachments/assets/dbaadddb-4e51-4821-ba9c-13c5ae38b5ba)

![1738172273761](https://github.com/user-attachments/assets/08290b7d-d065-47d2-a3be-4711de38710c)

#### Processing

![image](https://github.com/user-attachments/assets/19d45028-4b9a-4eeb-958b-87fe877d5ade)

According to p5js reference, I want to create a circle.

![image](https://github.com/user-attachments/assets/b6a2c432-6b4c-454a-9f62-d8f5b7b65ae8)

·I started by creating a 1000x1000 canvas. Then, I used background(0, 120, 120, 10); to add a semi-transparent background, which creates a trailing effect instead of completely clearing the screen each frame.

·I wanted to make the circle follow the mouse, so I used circle(mouseX, mouseY, 300);. This creates a glowing effect that moves dynamically with the cursor.

·I added a fixed circle in the center (circle(500, 500, 200);) and used an if statement to change its color based on the mouse’s position:

-If the mouse is on the left side, the circle is white.

-If the mouse is on the right side, the circle turns semi-transparent teal.

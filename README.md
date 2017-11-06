# Pong Game

A basic pong game using SVGs. First player to 11 points wins! Watch out for the big lumbering red ball...it can be slow and may seem easy to control at first, but with the small green one flying around at the same time, it may prove to be a tougher challenge than expected.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Pause**
* Spacebar
**Player 1:**
* a: up
* z: down
**Player 2:**
* ▲ : up
* ▼: down

**Stretch Goals:**

-A winner is now declared after either player scores 11 points. 
-A controls menu is implemented using HTML and CSS
-Created a larger ball, set at a slower speed for added difficulty 
-Paddles are smoother, and have no delay when key is held
-Attempted to have "+ & -" toggle the speed of the small ball, currently not working
-music player implemented for optional background music

**What I Learned**

It was kind of a steep learning curve at first, but I eventually grasped the concept of instantiating objects using constructors, and how to use keycodes and eventlisteners to trigger certain actions. I also learned how to render SVGs and set attributes to them. Importing and Exporting partials was another great tool I learned to implement code. 

It was a great experience and I thoroughly enjoyed making the pong project my own by customizing it and adding new features.

Note: The red ball will sometimes spawn and bounce up and down along the Y axis with no right or left trajectory. I believe I know how to fix this, but I will have to look further into it.






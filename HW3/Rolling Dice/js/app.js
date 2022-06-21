/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

firstDie = document.getElementById('first-die')
secondDie = document.getElementById('second-die')

document.getElementById('roll-dice').addEventListener('click', () => {
    random1 = Math.floor(Math.random()*6)+1
    random2 = Math.floor(Math.random()*6)+1
    firstDie.classList = "dice"
    firstDie.classList.add(`dice-${random1}`);
    secondDie.classList = "dice"
    secondDie.classList.add(`dice-${random2}`);
    
})


/*

Pseudocode

Step1 : Get html element py his id => getElementById
Step2 : Add event click to button to execute function => addEventListener
Step3 : Generate tow random numbers 
Step4 : Replace dice dice-2 class by classList and put dice
Step5 : Add (combine 'dice-' and random number) class to element by classList.add 
 */




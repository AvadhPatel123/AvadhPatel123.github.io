// Sets the variables for the program
let source_text = `
A friend is someone
You turn to.
A friend is someone
You confide in.
A friend is someone
Who stands by you.
A friend is someone
Who lifts your spirits.
A friend is someone
who encourages you.
A friend is someone
You treasure always.
A friend is someone
Who makes you smile.
A friend is someone
Who brightens your day.
A friend is you!`;
let search_word = 'friend';
let search_word2 = 'A';
let search_word3 = 'day';
let replace_word = "enemy";
let replace_word2 = "An";
let replace_word3 = "life";
let altered_text;

//Creates the funtion to change the text accordingly
function setup() {
  createCanvas(400, 400);
  altered_text = source_text.replaceAll(search_word, replace_word);
  altered_text = altered_text.replaceAll(search_word2, replace_word2);
    altered_text = altered_text.replaceAll(search_word3, replace_word3);

}

// Executes the text function above and runs the program
// Change the text and text color only when mouse is pressed
function draw() {
  background(220);
  textFont('Baskerville');
  textSize(17);
  let show_text;
  if(mouseIsPressed){
    fill('red');
    show_text = altered_text;
  } else {
    fill('black');
    show_text = source_text;
  }
  text(show_text, 10, 10, width*0.9);
  
}

//My group chose this poem because it had a lot of repition and we thought it would be interesting to see how someone would interpret the poem differently when the word friend is changed to enemy and the text color changes to red. 

//Source text cite: https://www.familyfriendpoems.com/poem/a-friend-is-someone
# Brainstorm

## HTML

Create header and footer tags --

Create main container for central contents --

Create container for timer and current score 
    - create container for timer --
    - create container for current score --

Create container for main quiz contents
    - create container for question & option boxes --
    - create container for questions --
    - create container for question option boxes --
    - Create container/box for start-game button --

Create container for scoreboard --

## CSS

Make header and footer uniform color

for central contents
    - flex display --
    - in a row no wrap --
    - good gapping --

for timer and current score container
    - flex display --
    - in a column no wrap --

for main quiz contents
  border in question & option box container --
      border around question, large text --

## JS

GIVEN I am taking a code quiz --

WHEN I click the start button
    query select start button from html
    add event listener for start button
    event listener starts quiz function
    event listener for answer options

THEN a timer starts and I am presented with a question
    create timer for 30 seconds
    create set interval for countdown
    create function for quiz, activates other functions w/ actual questions

    per question function:
        text content changes for question-box
        text content changes for answer-options

WHEN I answer a question
    per question function
        if else function to see if correct answer was chosen
            if right- next question, +1 points
            if wrong- -10 seconds to timer, 0 points

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and my score
    localStorage

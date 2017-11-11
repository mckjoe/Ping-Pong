# Ping - Pong - PingPong, Nov 10th, 2017.

## This appliccation will get a number from a person and will return a bunch of numbers up to their number from one and replace some of them with "ping", some with "pong", and some with "pingpong".

#### By Joseph McKinney

## This app revieves a number from a user, and then runs a function on that number to create an array of numbers from 1 through the input number, and then goes through that array of numbers, changing anything divisable evenly by 3 with the word "ping", anything divisable evenly by 5 with the word "pong", and anything divisible evenly by 15 with the word "pingpong" and will display it for the user in the html, each number or word as a list element.

## To view this page click on the gh-pages link, or to load the entire program directory to your computer.

* _clone the repository to your desktop_
* _double click on the shortcut on your desktop_
* _double click index.html_
* _watch as the program opens_
### To view source code in atom
* _clone repository to your desktop_
* _open command line on your computer_
* _cd into ping-pong directory_
* _type "atom ."_

## There are know non bugs at this time

## support and contact info

_If you need to reach me just hit me on my pager_

## techhnologies used
_This program was written using html, css, JavaScript, and markdown.

## Check the gh-pages link


## development steps

| Behavior |  Input | Output  |
|----------|--------|---------|
| Recieve Input| 3     | 3    |
| Count to input| 3     | [1,2,3]  |
|recognize when input % 3 === 0 | 3 | true|
|Recognize when input % 5 === 0 | 5 | true|
|Recognize when input % 15 === 0 | 15| true|
|recognize non numerical input| hello |"please enter a number"|

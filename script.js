// Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
// console.log(warmHugs.replace("like", "love"));

// changing it with the console.log doesn't really change the value of the variable. It only shows us what it would look like IF we ran that command. So I commented it out and inserted the following command to redefine the value of the variable "warmHugs".

warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
beenImpaled = beenImpaled.slice(18, 36);
console.log(beenImpaled);

// 3a
let dotDotDot = "..."

// 3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();  
// 0 through 0.99999
randomNumber *= 3;
// 0 to2.99999
randomNumber = Math.floor(randomNumber);
// gets rid of decimal
randomNumber++;
console.log(randomNumber);

// Bonus
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
// console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));

// console.log(reindeers.replace(/ /g, '_'));
// The first forward slash allows for special characters, since there is a space following the slash we are selecting the space to add a special character, then the /g means globally, (the whole string). Then the space followed by the quotations around the underscore means that we are replacing space with underscore. 

// another way

console.log(reindeers.replaceAll(' ', '_'));

// 8
let squareRoot = Math.sqrt(2);
console.log(squareRoot);
// console.log(Math.sqrt(2));
// or
console.log(Math.SQRT2);

// 9
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;
// console.log(newRandomNumber);

// or
// let newRandomNumber = Math.ceil((Math.random() *17)+6);
// console.log(newRandomNumber);

// or
let newRandomNumber = (Math.floor(Math.random()*17+7));
console.log(newRandomNumber);

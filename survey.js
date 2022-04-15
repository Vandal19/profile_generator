// Execute a sequence of such asynchronous tasks in a linear manner. In other words, we will create a linear flow through asynchronous, callback-based function calls. This activity will be to create a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc. It will then generate a profile description for them to use online
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  answers.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);
      rl.question('Breakfast, lunch or dinner. Which one is your favorite meal? ', (answer) => {
        answers.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answers.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answers.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answers.push(answer);
              rl.close();

              const name = answers[0];
              const activity = answers[1];
              const music = answers[2];
              const meal = answers[3];
              const food = answers[4];
              const sport = answers[5];
              const superpower = answers[6];

              console.log('Generating your profile!');
              console.log(`My name is ${name} and I really enjoy listening to ${music} when doing ${activity} because it gets me in the mood! My favorite meal of the day will be ${meal}, especially when I am eating ${food}. In terms of sports, I really love ${sport}. If I could have a superpower, I believe it will be ${superpower}`);
            });
          });
        });
      });
    });
  });
});
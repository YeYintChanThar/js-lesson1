// let js = 'amazing';
// if(js == 'amazing') alert('Js is amazing');

// if(NaN === "not a number"){
//     console.log('Aww');
// }else{
//     console.log('INN par');
// }

// Coding Challenge #1
/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formulas/heights/height ** 2 = mass / (height * height). (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John wweighs92 kg and is 1.95 m tall.
// TEST DATA 2: Marweighshts 95 kg and is 1.88 m tall. Joweighshts 85 kg and is 1.76 m tall.
// GOOD LUCK 😀
// */

// // let markMass = 78;
// // let markHeigh = 1.69;
// // let johnMass =92;
// // let johnHeigh= 1.95;
// // let markBMI  = markMass/(markHeigh*markHeigh);
// // let johnBMI  = johnMass/(johnHeigh*johnHeigh);
// // console.log(markBMI);
// // console.log(johnBMI);

// // let markHigherBMI = markBMI > johnBMI;
// // console.log(markHigherBMI);

// // fullName = 'bmps education center';
// // console.log(fullName);
// // const firstName = 'Sanay';
// // const lastName  = 'Mg Mg';
// // const fullName  = firstName +' '+ lastName;
// // console.log(fullName);
// // console.log(25-5-3);
// // const nowYear = 2022;
// // const ageMgMg =nowYear - 1999;
// // const ageKyawKyaw = nowYear -1980;

// // const averageAge = (ageMgMg + ageKyawKyaw)/2;
// // console.log(averageAge);

// // const firstName = 'Hello';
// // const job       = 'Javascript Developer';

// // const birthYear  = 1990;

// // const hello = "I'm "+firstName+', a ' + (2022-birthYear) + 'years old ' + job + '!';
// // let intro =`I'm ${firstName} a ${2022-birthYear} years old ${job}!`;
// // console.log(intro);
// // localStorage.setItem('name','YeYint');

// // const age =16;
// // const isOldEnough = age >= 18;

// // if(isOldEnough){
// //     console.log('You Can Drive');
// // }else{
// //     const yearLeft = 18-age
// //    console.log(`Mg Mg is ${yearLeft} years left to start driving license`);
// // }

// // Coding Challenge #2
// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// HINT: Use an if/else statement 😉
// GOOD LUCK 😀
// */

// //  let markMass = 78;
// //  let markHeigh = 1.69;
// //  let johnMass =92;
// //  let johnHeigh= 1.95;
// //  let markBMI  = markMass/(markHeigh*markHeigh);
// //  let johnBMI  = johnMass/(johnHeigh*johnHeigh);

// //  const markIsHigher = markBMI > johnBMI;

// // //  if(markIsHigher){
// // //     console.log("Mark's BMI is higher than John's!");
// // //  }else{
// // //     console.log("John's BMI is higher than Mark's!");
// // //  }
// //  if(markIsHigher){
// //     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// //  }else{
// //     console.log(`John's BMI  (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// //  }
// // const inputYear = '1999';
// // console.log(Number(inputYear) + 23);
// // console.log(parseInt('Mg Mg'));

// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean('BMPS'));
// // console.log(Boolean({}));

// // const money = '10 USD';
// // if(money){
// //    console.log('I have some money');
// // }else{
// //    console.log('I have no money');
// // }

// // let height;
// // if(height){
// //    console.log('Yay,Height is defined');
// // }else{
// //    console.log('Oh! Height is undefined');
// // }
// // switch(day){
//    //    case 'monday':
//    //       console.log('Plan course structure');
//    //    case 'tuesday':
//    //       console.log('Record course audio');
//    //       break;
//    //    case 'wednesday':
//    //    case 'thursday':
//    //       console.log('Write Code Example');
//    //       break;
//    //    case 'friday':
//    //       console.log('Prepare theorical facts');
//    //       break;
//    //    default:
//    //       console.log('Invalid Day');
//    // }
   
// // const day = 'life';
// // if(day === 'monday'){
// //    console.log('It is monday');
// // }else if(day ==='tuesday'){
// //    console.log('It is Tuesday');
// // }else if(day ==='wednesday' || day ==='thursday'){
// //    console.log('It is wed and thu days');
// // }else if(day ==='friday'){
// //    console.log("It is friday");
// // }else{
// //    console.log('It is holiday');
// // }

// // Coding Challenge #4
// /*
// Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀
// */

// // const bill  =275;
// // const tip_1 = 0.15;
// // const tip_2 = 0.20;
// // const tip_calculation = bill >=50 && bill <=300 ? tip_1:tip_2;
// // console.log(`The bill was ${bill}$,the tip was ${tip_calculation}$,and the total value ${bill +tip_calculation}$`);



// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (a draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points. HINT: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const teamDolphinScore = (97+112+101)/3;
// const teamKoalaScore   =(109+95+106)/3;
// console.log(teamDolphinScore,teamKoalaScore);

// if(teamDolphinScore > teamKoalaScore && teamDolphinScore >=100){
//    console.log("Team Dolphin Win");
// }else if(teamKoalaScore > teamDolphinScore && teamKoalaScore >= 100){
//    console.log("Team Koala Win");
// }else if(teamDolphinScore === teamKoalaScore && teamDolphinScore >= 100 && teamKoalaScore >= 100){
//    console.log("Draw");
// }
// else if(teamDolphinScore < 101 && teamKoalaScore <101){
//    teamDolphinScore > teamKoalaScore ? console.log("Dolphin Win in ternary"):console.log("Koala Win in ternary");
// }else{
//    console.log("Bull Shit Teams");
// }
// teamDolphinScore > teamKoalaScore ? console.log('Dolphin team win'):console.log('Koala Team Win');
// console.log(teamDolphinScore);

 let cost =30;
let tip  = 0;

 switch(false){
    case (cost >= 50 && cost <= 300):
    tip += cost*(15/100);
    break;
    case (cost< 50):
    console.log("case 2");
    // tip =1;
    break;
    default:
     tip =cost*(20/100);
     break;
 }
 console.log(`The bill was ${cost},the tip was ${tip}, and the total value is ${tip+ cost}.`);
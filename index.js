let raceNumber = Math.floor(Math.random()*1000);
// console.log(raceNumber);

let registrants_early = true;
// registrants_early = false;

let registrants_age = Math.floor(Math.random()*60);

if(registrants_age > 18 && registrants_early){
    raceNumber += 1000;
} 

if(registrants_age > 18 && registrants_early){
    console.log(`${raceNumber} will start at 9.30 am`);
} else if (registrants_age > 18 && registrants_early === false){
    console.log(`${raceNumber} will start at 11:00 am`);
} else if (registrants_age < 18){
    console.log(`${raceNumber} will start at 12:30 pm`);
} else {
    console.log('Head to registration desk');
}


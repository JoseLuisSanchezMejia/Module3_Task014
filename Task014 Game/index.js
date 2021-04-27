let urName= prompt("Welkom! Wat is je naam?");
alert("Hey "+urName);
let guess= parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden"));
let number =Math.floor(Math.random()*26);
let times=0;

const checker=function(guess,times){
        if (guess === number){
            alert("Gefeliciteerd je hebt gewonnen. Het spel is nu af!");
            return;
        }
        else{
            while(times < 4){
                times++;
                let trial=confirm("Dat is onjuist. Wil je het nog keer proberen?");
                if (trial==true){
                    guess= parseInt(prompt("Probeer het nog een keer!"));
                    checker(guess);
                }
                else {return;}
            }
        }
};
checker(guess, times);
alert("Indien je nog niet hebt gewonnen. Dan is het spel afgelopen. Helaas " +urName+" probeer het een andere keer");
alert("Dag "+ urName+ " Tot de volgende keer");
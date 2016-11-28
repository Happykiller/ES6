export class OdaGamesFindMe {

    constructor() {
        //Private part
        this.goal = this.setGoal();
        this.nbTry = 0;
        this.nbTryMax = 3;

        //Public part
        window.Oda.Games.FindMe = {};
        window.Oda.Games.FindMe.propose = this.propose;
    }

    propose (choice) {
        let str = "";
        try {
            let choiceInt = parseInt(choice);
            if(Number.isNaN(choiceInt)){
                str = `'${choice}' is not an integer.`;
            }else{
                odaGamesFindMe.nbTry++;
                if(odaGamesFindMe.nbTry < odaGamesFindMe.nbTryMax){
                    if(choice === odaGamesFindMe.goal){
                        str = `You win !! (in ${odaGamesFindMe.nbTry+1} try)`;
                        odaGamesFindMe.nbTry = 0;
                        odaGamesFindMe.setGoal();
                    }else if(choice > odaGamesFindMe.goal){
                        str = `To big ,) (${odaGamesFindMe.nbTryMax - odaGamesFindMe.nbTry} try left)`;
                    }else {
                        str = `To small :o (${odaGamesFindMe.nbTryMax - odaGamesFindMe.nbTry} try left)`;
                    }
                }else{
                    str = `Fail no more tries !! (The goal was ${odaGamesFindMe.goal})`;
                    odaGamesFindMe.nbTry = 0;
                    odaGamesFindMe.setGoal();
                }
            }
        }catch(ex){
            str = ex;
        }
        return str;
    }

    setGoal () {
        let goal = Math.round(Math.random() * 10);
        return goal;
    }
}

let odaGamesFindMe = new OdaGamesFindMe();
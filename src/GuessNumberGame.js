let GenerateRandomAnswer = require("./GenerateRandomAnswer");

class GuessNumberGame{

    constructor(){
      this.answer =  new GenerateRandomAnswer(0,9,4).generateRandomAnswer();
      this.count = 0;
    }

    test(input){

      let inputFormatValidator = this.testInputFormat(input);

      if(!inputFormatValidator){
          return "wrong answer";
      }

      let inputArr = input.split(" ");
      let aCount = 0,bCount = 0;
      let _this = this;

      inputArr.map(function (oneDigit,index) {

          if(_this.answer.indexOf(oneDigit) !=-1) {
              if(_this.answer.indexOf(oneDigit) == index){
                  aCount++;
               }else {
                  bCount++;
              }
          }

      });

      this.count++;

      if(this.count == 7){
          console.log("Your has only 6 chances.");
      };

      return `${aCount}A${bCount}B`;
    }


    testInputFormat(input){

        let inputArr = input.split(" ");

        if(inputArr.length != 4) {
            return false;
        }

        inputArr.map(function (item) {

            let num = String(item).charCodeAt(0);

            if(!(num >= 48 && num <= 57)){
                return false;
            }

        });

        return true;
    }


}

module.exports = GuessNumberGame;
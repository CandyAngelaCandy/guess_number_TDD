class GenerateRandomAnswer{

    constructor(min,max,digitCount){
        this.min = min;
        this.max = max;
        this.digitCount = digitCount;
    }

    generateRandomAnswer(){
        let answer = "";

        for (let i = 0; i < this.digitCount; i++) {

            let systemRandom = Math.random();


            let oneDigit = Math.floor(systemRandom*(this.max-this.min +1)+this.min);


            if(answer.indexOf(oneDigit) != -1){
                i--;
            }else{
                answer += oneDigit;
            }
        }
        return answer;
    }
}

module.exports = GenerateRandomAnswer;



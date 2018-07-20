
let GuessNumberGame = require("./GuessNumberGame");

let GenerateRandomAnswer = require("./GenerateRandomAnswer");

describe('GuessNumberGame',function () {

    beforeEach(function () {

        jest.spyOn(GenerateRandomAnswer.prototype,
              "generateRandomAnswer").mockReturnValueOnce("1234");

    });

    it('should return 4A0B for input 1 2 3 4 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("1 2 3 4")).toEqual("4A0B");
    });

    it('should return 0A1B for input 5 6 7 1 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("5 6 7 1")).toEqual("0A1B");
    });

    it('should return 1A0B for input 1 5 6 7 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("1 5 6 7")).toEqual("1A0B");
    });

    it('should return 1A0B for input 2 1 6 7 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("2 1 3 7")).toEqual("1A2B");
    })

    describe('test input format',function () {
        it('should return input format error for input 1 2 3 4 when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().testInputFormat("3 2 1 4")).toEqual("1A3B");
        })

        it('should return input format error for input "" when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().test("")).toEqual("wrong answer");
        })

        it('should return input format error for input a 2 3 4 when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().test("a 2 3 4")).toEqual("wrong answer");
        })

        it('should return input format error for input  12 3 4 when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().test("12 3 4")).toEqual("wrong answer");
        })

        it('should return input format error for input 1 2 3 4 5 when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().test("1 2 3 4 5")).toEqual("wrong answer");
        })

        it('should return input format error for input 1234 when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().test("1234")).toEqual("wrong answer");
        })

        it('should return input format error for input 1234 when answer is 1 2 3 4',function () {
            expect(new GuessNumberGame().test("- ^ * 3")).toEqual("wrong answer");
        })

    })

    describe('user has only 6 chances',function () {

        const chanceCount = 6;

        let game = new GuessNumberGame();

        for (let i = 0; i < chanceCount ; i++) {
            game.test("5 6 7 1");
        }

        game.test("5 6 7 1");

        //jest.spyOn(console,log).mockReturnValueOnce("Your has only 6 chances.");//?
    });
    
     describe('generate random answer',function () {

         let number = 0;

         jest.spyOn(Math,"random")
             .mockImplementation(() => number+=0.1);

         console.log(Math.random());
         console.log(Math.random());
         console.log(Math.random());
         console.log(Math.random());
         console.log(Math.random());
         console.log(Math.random());

          it('should return 1234 for input 0,9,4 when Math.random function is mocked',function () {
              expect(new GenerateRandomAnswer(0,9,4).generateRandomAnswer()).toEqual("1234");
          });

         it('should return 1234 for input 0,9,4 when Math.random function is mocked',function () {
             expect(new GenerateRandomAnswer(0,9,4).generateRandomAnswer()).toEqual("1234");
         });

     });
});






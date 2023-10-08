import {
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'


describe('saveQuestion', () => {
    it('Will return question if the question input have enough information', async() => {
        var question = {
            optionOneText: 'optionOneText',
            optionTwoText: 'optionTwoText',
            author: 'sarahedo',
          };
        var result = await _saveQuestion(question);
        expect(result.author).toEqual('sarahedo');
        expect(result.optionOne.text).toEqual('optionOneText');
        expect(result.optionTwo.text).toEqual('optionTwoText');
    });

    it('will return error if the question input don/t have enough information', async() => {
        var question = {
            author: 'authedUser',
          };
        await expect(_saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });

});


describe('saveQuestionAnswer', () => {
    it('Will return true if the questionAnswer input have enough information', async() => {
        var questionAnswer = {
            qid : '8xf0y6ziyjabvozdd253nd',
            authedUser: 'sarahedo',
            answer: 'optionOne',
        };
        var result = await _saveQuestionAnswer(questionAnswer);
        expect(result).toEqual(true);
    });

    it('will return error if the questionAnswer input dont have enough information', async() => {
        var questionAnswer = {
            authedUser: 'authedUser',
          };
        await expect(_saveQuestionAnswer(questionAnswer)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });

});
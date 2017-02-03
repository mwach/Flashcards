import {Injectable} from '@angular/core';
import {Question} from './question';

@Injectable()
export class QuizService{

    QUESTIONS: Question[] = [
            {word: 'cow', translation: 'krowa', wordLanguage: 'en', translationLanguage: 'pl'}
    ];

    public getQuizes(): Promise<Question[]>{
        return Promise.resolve(this.QUESTIONS)      ;
    }
}
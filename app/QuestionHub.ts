import {Question} from './question';

export class QuestionHub{
    private questions: Question[] = [];

    currentQuestion: Question;
    quizStarted= false;

    total = 0;
    pos = 0;

    public addAll(questions: Question[]){
        questions.forEach(element => {
            this.questions.push(element);    
        });
        this.total = this.questions.length;
        this.pos = 1;
    }
}
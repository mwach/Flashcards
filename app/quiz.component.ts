import {Component, Input} from '@angular/core';
import {QuestionHub} from './QuestionHub';

@Component({
    moduleId: module.id,
    selector: 'quiz-panel',
    templateUrl: 'quiz.component.html'
})
export class QuizComponent{

    @Input()
    private questionHub: QuestionHub;
}
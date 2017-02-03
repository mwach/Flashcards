import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { QuestionHub } from './QuestionHub';

@Component({
    moduleId: module.id,
    selector: 'settings-panel',
    templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {

    numberOfQuestions = 20;

    @Input()
    private questionHub: QuestionHub;

    constructor(
        private quizService: QuizService
    ) {
    }

    ngOnInit() {
        console.log(this.questionHub);
    }

    public startQuiz(): void {
        this.quizService.getQuizes().then(questions => {
            this.questionHub.addAll(questions);
            this.questionHub.quizStarted = true;
        });
    }
}
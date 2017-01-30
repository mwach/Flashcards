import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search-form',
    templateUrl: 'search.component.html',
})
export class SearchComponent { 

    send(startDate: string, endDate: string): void{
        alert(startDate);
        alert(endDate);
    }
}

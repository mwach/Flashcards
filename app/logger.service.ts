import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService{

    public err(msg: string): void{
        console.log(msg);
    }
}
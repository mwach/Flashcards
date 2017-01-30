import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

    private user = new User();

    getUser(): Promise<User>{

        return Promise.resolve(this.user);
  // return new Promise(resolve => {
  //   // Simulate server latency with 2 second delay
  //   setTimeout(() => resolve(this.user), 2000);
  // });
    }

    login(username: string, password: string) : Promise<User>{
      if(password === 'abc'){
                this.user.logged = true;
        this.user.name = 'Marcin';

        return this.getUser();
      }
      return Promise.reject("invalid username or password");
    }
}
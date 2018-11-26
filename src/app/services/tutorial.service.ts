import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TutorialService {
    constructor(private http: HttpClient) {

    }

    getGitHubUserInfo(username: string) {
        return this.http.get('https://api.github.com/users/' + username);
    }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private Http: HttpClient) { }

  getMembers() {
    return this.Http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.Http.get<Member>(this.baseUrl + 'users/' + username);
  }
}

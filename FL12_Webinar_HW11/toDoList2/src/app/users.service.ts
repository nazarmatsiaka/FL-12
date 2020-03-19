import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface userInterface {
  id: number,
  name: string,
  email: string,
  address: {
    street: string,
  },
  phone: string,
  website: string
}

@Injectable()
export class UsersService {
  searchValue$ = new Subject<string>();
  users$ = new Subject<userInterface[]>();

  idForNewUser: number;

  constructor(private httpClient: HttpClient) {}

  getUsers(): void {
    this.httpClient.get<userInterface[]>(`http://localhost:3000/users`)
      .subscribe(val => {
        this.users$.next(val);
        this.getNewId(val);
      });
  }
  getUserById(id:number): Observable<userInterface> {
    return this.httpClient.get<userInterface>(`http://localhost:3000/users/${id}`);
  }
  delete(id: number): void {
    this.httpClient.delete(`http://localhost:3000/users/${id}`).subscribe(
      () => {this.getUsers()}
    );
  }
  editUser(userObj: userInterface): Observable<userInterface> {
   return this.httpClient.put<userInterface>(`http://localhost:3000/users/${userObj.id}`, JSON.stringify(userObj), {
     headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
   });
  }

  addUser(newUser:userInterface): Observable<userInterface> {
    return this.httpClient.post<userInterface>('http://localhost:3000/users', JSON.stringify(newUser),
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
  }

  getNewId(users: userInterface[]): void {
    let maxId = users.reduce((max, user) => user.id > max? user.id: max, 0);
    this.idForNewUser = maxId + 1;
  }

}

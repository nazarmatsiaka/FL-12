export interface userInterface {
  id: number,
  name: string,
  email: string,
  phone: string
}

export class UsersService {
  users: userInterface[] = [
    {
      id: 1,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447'
    },
    {
      id: 2,
      name: 'Patricia Lobsack',
      email: 'Julianne@kory.org',
      phone: '493-170-9623'
    },
    {
      id: 3,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593'
    }
  ];

  addChange(user: userInterface) {
    let userNum = this.users.map(us => us.id).indexOf(user.id);
    if(userNum === -1){
      this.users.unshift(user);
    } else {
      this.users.splice(userNum, 1, user);
    }
  }

  delete(id: number) {
    let userNum = this.users.map(us => us.id).indexOf(id);
    if(userNum !== -1){
      this.users.splice(userNum, 1);
    }
  }

  getNewId(): number {
    let maxId = this.users.reduce((newId, item) => {
      return item.id > newId? item.id: newId;
    }, 0);

    return maxId + 1;
  }
}

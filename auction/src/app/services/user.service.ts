import { Injectable } from '@angular/core';

interface User {
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  current: User = { role: 'admin2' };

  constructor() {}

  getRole(): string {
    return this.current.role;
  }

  setRole(role: string) {
    this.current.role = role;
  }
}

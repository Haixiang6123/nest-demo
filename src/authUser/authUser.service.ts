import { Injectable } from '@nestjs/common';

export type AuthUser = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class AuthUserService {
  private readonly users: AuthUser[] = [
    {
      id: 1,
      name: 'Jack',
      username: 'jack',
      password: '123456',
    },
    {
      id: 2,
      name: 'Jerry',
      username: 'jerry',
      password: '123456',
    },
  ];

  async findOne(username: string): Promise<AuthUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

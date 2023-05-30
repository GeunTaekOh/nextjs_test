import { User } from 'src/model/user';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

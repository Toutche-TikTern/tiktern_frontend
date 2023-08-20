// import NextAuth from 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT, JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      access_token: string;
      fname: string;
      lname: string;
      email: string;
      phone: string;
      usernames: string;
      roles: string[] | string;
    } & DefaultSession;
  }
  interface User extends DefaultUser {
    roles: string[] | string;
    access_token: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    usernames: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    roles: string[] | string;
  }
}

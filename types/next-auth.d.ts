
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      userName: string;
      name: string;
      email: string;
      role: string;
      accessToken: string;
      access:string;
      token:string;
      // ff:string;
    };
  }
}
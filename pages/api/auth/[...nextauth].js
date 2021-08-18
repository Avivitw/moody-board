import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options = {
  providers: [
    // Passwordless /  sign in with Auth and google
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],

  adapter: PrismaAdapter(prisma),
};

export default (req, res) => NextAuth(req, res, options);

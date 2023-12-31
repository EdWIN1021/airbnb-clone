import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        // if (user) {
        //   return user;
        // } else {
        //   return null;
        // }
        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "github") {
        await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
      }

      return true;
    },
    async jwt({ token, account }) {
      //   if (account) {
      //     token.accessToken = account.access_token;
      //   }
      return token;
    },
    async session({ session, token, user }) {
      //   session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

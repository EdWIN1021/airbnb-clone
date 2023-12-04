import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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

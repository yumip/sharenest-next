import { getServerSession, type NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/okta";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: "",
      clientSecret: "",
      issuer: "",
    }),
  ],
  pages: {
    signIn: `/`,
    verifyRequest: `/`,
    error: "/",
  },
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        console.log("✅ JWT CALLBACK", { token, account });
        // token.user = user.id;
        // token.role = user.role
        if (account) {
          token.accessToken = account.access_token;
        }
      }
      return token;
    },
    session: async ({ session, token }) => {
      // if (token && typeof token.id === "string") {
      //   session.user.id = token.id;
      //   if (token.role === "admin" || token.role === "user") {
      //     session.user.role = token.role;
      //   }
      // }
      console.log("✅ SESSION CALLBACK", { session, token });
      return session;
    },
    signIn: async ({ user, account, profile }) => {
      console.log("✅ SIGN IN CALLBACK", { user, account, profile });
      return true;
    },
  },
};

export function getSession() {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  } | null>;
}

// export function withSiteAuth(action: any) {
//   return async (
//     formData: FormData | null,
//     siteId: string,
//     key: string | null,
//   ) => {
//     const session = await getSession();
//     if (!session) {
//       return {
//         error: "Not authenticated",
//       };
//     }

//     const site = await db.query.sites.findFirst({
//       where: (sites, { eq }) => eq(sites.id, siteId),
//     });

//     if (!site || site.userId !== session.user.id) {
//       return {
//         error: "Not authorized",
//       };
//     }

//     return action(formData, site, key);
//   };
// }

import { unstable_cache } from "next/cache";
import { mockSites } from "@/mocks/data/site";
import { mockUsers } from "@/mocks/data/users";

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      return await mockSites[0];
    },
    [`${domain}-metadata`],
    {
      revalidate: 900,
      tags: [`${domain}-metadata`],
    },
  )();
}

export async function getUsersForSite(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      return await mockUsers.filter((user) => user.groupId === domain);
    },
    [`${domain}-posts`],
    {
      revalidate: 900,
      tags: [`${domain}-users`],
    },
  )();
}

// export async function getPostData(domain: string, slug: string) {
//   const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
//     ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
//     : null;

//   return await unstable_cache(
//     async () => {
//       const data = await db
//         .select({
//           post: posts,
//           site: sites,
//           user: users,
//         })
//         .from(posts)
//         .leftJoin(sites, eq(sites.id, posts.siteId))
//         .leftJoin(users, eq(users.id, sites.userId))
//         .where(
//           and(
//             eq(posts.slug, slug),
//             eq(posts.published, true),
//             subdomain
//               ? eq(sites.subdomain, subdomain)
//               : eq(sites.customDomain, domain),
//           ),
//         )
//         .then((res) =>
//           res.length > 0
//             ? {
//                 ...res[0].post,
//                 site: res[0].site
//                   ? {
//                       ...res[0].site,
//                       user: res[0].user,
//                     }
//                   : null,
//               }
//             : null,
//         );

//       if (!data) return null;

//       const [mdxSource, adjacentPosts] = await Promise.all([
//         getMdxSource(data.content!),
//         db
//           .select({
//             slug: posts.slug,
//             title: posts.title,
//             createdAt: posts.createdAt,
//             description: posts.description,
//             image: posts.image,
//             imageBlurhash: posts.imageBlurhash,
//           })
//           .from(posts)
//           .leftJoin(sites, eq(sites.id, posts.siteId))
//           .where(
//             and(
//               eq(posts.published, true),
//               not(eq(posts.id, data.id)),
//               subdomain
//                 ? eq(sites.subdomain, subdomain)
//                 : eq(sites.customDomain, domain),
//             ),
//           ),
//       ]);

//       return {
//         ...data,
//         mdxSource,
//         adjacentPosts,
//       };
//     },
//     [`${domain}-${slug}`],
//     {
//       revalidate: 900, // 15 minutes
//       tags: [`${domain}-${slug}`],
//     },
//   )();
// }

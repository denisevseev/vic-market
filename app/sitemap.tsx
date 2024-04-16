import { MetadataRoute } from "next";

const generateBlogPostsSitemapObjects = async () => {
  return [
    {
      slug: "blog-post-1",
      updatedAt: new Date(),
    },
    {
      slug: "blog-post-2",
      updatedAt: new Date(),
    },
  ];
};
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_FRONT_LINK ? process.env.NEXT_PUBLIC_FRONT_LINK + "/" : "https://localhost:3000/";

  return [
    {
      url: url ,
      priority: 1.0,
    },
    {
      url: url + "our-company",
      priority: 0.8,
    },
    {
      url: url + "careers",
      priority: 0.8,
    },
    {
      url: url + "news",
      priority: 0.8,
    },
    {
      url: url + "press",
      priority: 0.8,
    },
    {
      url: url + "market-research",
      priority: 0.8,
    },
    {
      url: url + "newsletter",
      priority: 0.8,
    },
    {
      url: url + "payments",
      priority: 0.8,
    },
    {
      url: url + "contact-us?from=seller-details",
      priority: 0.8,
    },
    {
      url: url + "contact-us?from=buyer-details",
      priority: 0.8,
    },
    {
      url: url + "categories",
      priority: 0.8,
    },
    {
      url: url + "contact-us?from=legal",
      priority: 0.8,
    },
    {
      url: url + "terms-of-use",
      priority: 0.8,
    },
    {
      url: url + "terms",
      priority: 0.8,
    },
    {
      url: url + "privacy-policy",
      priority: 0.8,
    },
  ];
  /*
  return [
    {
      url: "https://acme.com",
      priority: 1,
    },
    {
      url: "https://acme.com/blog",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    
    ...(await generateBlogPostsSitemapObjects()).map((o) => ({
      url: `https://acme.com/blog/${o.slug}`,
      lastModified: o.updatedAt,
    })),
    
  ];
  */
}

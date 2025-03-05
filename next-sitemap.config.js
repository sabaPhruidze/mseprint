/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mseprinting.com/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

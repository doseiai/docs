/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://docs.dosei.ai',
  generateRobotsTxt: true, // (optional)
  // ...other options
}

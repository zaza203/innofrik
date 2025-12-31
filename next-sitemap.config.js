/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://innofrik.site',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*', '/private/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    const priorityMap = {
      '/': 1.0,
      '/services': 0.9,
      '/contact': 0.9,
      '/about': 0.8,
      '/team': 0.7,
      '/products': 0.8,
      '/blog': 0.7,
      '/privacy': 0.3,
    };

    const changefreqMap = {
      '/': 'daily',
      '/services': 'weekly',
      '/blog': 'daily',
      '/contact': 'monthly',
      '/about': 'monthly',
      '/privacy': 'yearly',
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || config.changefreq,
      priority: priorityMap[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

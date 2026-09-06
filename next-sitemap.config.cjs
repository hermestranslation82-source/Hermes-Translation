module.exports = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com'),
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' }
    ]
  },
  alternateRefs: [
    { href: 'https://hermes-certified.com/ar', hreflang: 'ar' },
    { href: 'https://hermes-certified.com/en', hreflang: 'en' }
  ]
};

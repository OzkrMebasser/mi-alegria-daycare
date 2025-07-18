// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://mialegriadaycare.ca';

  const staticRoutes = [
    '',
    '/home',
    '/about',
    '/services',
    '/blog',
    '/blog/family-daycare-vs-traditional-advantages',
    '/blog/from-home-to-home-why-many-parents-prefer-family-daycares',
    '/blog/small-groups-family-daycare-benefits',
    '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map((path) => {
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
  })
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

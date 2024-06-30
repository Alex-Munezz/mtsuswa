const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define the URLs you want to include in your sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 0.9 },
  { url: '/About', changefreq: 'monthly', priority: 0.7 },
  { url: '/Contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/Services', changefreq: 'monthly', priority: 0.7 },
  // Add more URLs as needed
];

const sitemapStream = new SitemapStream({ hostname: 'https://mountsuswahikencamp.com' });

async function generateSitemap() {
  try {
    // Create a write stream for the sitemap.xml file
    const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));
    
    // Stream the sitemap data to the write stream
    sitemapStream.pipe(writeStream);

    // Write each link to the sitemap stream
    links.forEach(link => sitemapStream.write(link));
    
    // End the sitemap stream
    sitemapStream.end();

    // Wait for the stream to finish
    await streamToPromise(sitemapStream);

    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Execute the function
generateSitemap();

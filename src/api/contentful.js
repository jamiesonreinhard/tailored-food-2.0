const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

export const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPostPreview',
    });

    // Extract and format the data as needed
    const formattedPosts = response.items.map((item) => {
      return {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        date: item.fields.date,
        link: item.fields.link,
        // Assuming "author" is a reference field to another content type
        author: item.fields.author.fields, // Change to the correct field name
        // Assuming "image" is a reference field to an asset
        image: item.fields.image.fields.file.url, // Get the image URL
      };
    });

    return formattedPosts;
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    throw error;
  }
};

import axios from 'axios';

const contentfulAPI = axios.create({
  baseURL: 'https://cdn.contentful.com',
});

export const fetchBlogPosts = async () => {
  try {
    const response = await contentfulAPI.get(
      `/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blogPost`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    throw error;
  }
};

// Create similar functions for other content types (media posts, galleries, video galleries)

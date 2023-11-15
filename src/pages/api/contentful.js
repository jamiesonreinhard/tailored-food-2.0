const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchBlogPosts = () => {
  client
    .getContentType("<content_type_id>")
    .then((contentType) => console.log(contentType))
    .catch(console.error);
};

// Create similar functions for other content types (media posts, galleries, video galleries)

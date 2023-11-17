const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

// FETCH BLOG POSTS
export const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogPostPreview",
    });

    const formattedBlogPosts = response.items.map((item) => {
      return {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        date: item.fields.date,
        link: item.fields.link,
        author: item.fields.author.fields,
        image: item.fields.image.fields.file.url,
      };
    });

    return formattedBlogPosts;
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error);
    throw error;
  }
};

// FETCH MEDIA POSTS
export const fetchMediaPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "mediaPostPreview",
    });

    const formattedMediaPosts = response.items.map((item) => {
      return {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        date: item.fields.date,
        link: item.fields.link,
        image: item.fields.image.fields.file.url,
      };
    });

    return formattedMediaPosts;
  } catch (error) {
    console.error("Error fetching media posts from Contentful:", error);
    throw error;
  }
};

// FETCH PODCASTS
export const fetchPodcasts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "podcastPreview",
    });

    const formattedPodcasts = response.items.map((item) => {
      return {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        image: item.fields.image.fields.file.url,
        link: item.fields.link,
        date: item.fields.date,
        length: item.fields.length,
      };
    });

    return formattedPodcasts;
  } catch (error) {
    console.error("Error fetching podcasts from Contentful:", error);
    throw error;
  }
};

// FETCH TEAM MEMBERS
export const fetchTeamMembers = async () => {
  try {
    const response = await client.getEntries({
      content_type: "teamMember",
    });

    const formattedTeamMembers = response.items.map((item) => {
      return {
        firstName: item.fields.firstName,
        lastName: item.fields.lastName,
        title: item.fields.title,
        bio: item.fields.bio,
        image: item.fields.image.fields.file.url,
      };
    });

    return formattedTeamMembers;
  } catch (error) {
    console.error("Error fetching team members from Contentful:", error);
    throw error;
  }
};

// FETCH PARTNERS
export const fetchPartners = async () => {
  try {
    const response = await client.getEntries({
      content_type: "partner",
    });
    const formattedPartners = response.items.map((item) => {
      return {
        name: item.fields.name,
        logo: item.fields.logo.fields.file.url,
        link: item.fields.websiteLink,
        displayOnHomepage: item.fields.displayOnHomepage
      };
    });

    return formattedPartners;
  } catch (error) {
    console.error("Error fetching partners from Contentful:", error);
    throw error;
  }
};

export const fetchProjects = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'project',
    });
    console.log(response.items);
    const formattedProjects = response.items.map((item) => {
      return {
        id: response.sys.id,
        type: item.fields.type,
        name: item.fields.name,
        location: item.fields.location,
        longLocation: item.fields.longLocation,
        status: item.fields.status,
        paragraphs: item.fields.paragraphs,
        partnerWebsite: item.fields.partner.fields.partnerWebsite,
        partnerImage: item.fields.partner.fields.logo.fields.file.url,
        latitude: item.fields.latitude,
        latitude: item.fields.longitude
      };
    });

    return formattedProjects;
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error);
    throw error;
  }
};

// // FETCH GALLERY IMAGES
// export const fetchGalleryImages = async () => {
//   try {
//     const response = await client.getEntries({
//       content_type: "galleryImage",
//     });

//     const formattedGalleryImages = response.items.map((item) => {
//       return {
//         date: item.fields.date,
//         caption: item.fields.caption,
//         image: item.fields.image.fields.file.url,
//       };
//     });

//     return formattedGalleryImages;
//   } catch (error) {
//     console.error("Error fetching gallery images from Contentful:", error);
//     throw error;
//   }
// };

// // FETCH GALLERY VIDEOS
// export const fetchGalleryVideos = async () => {
//   try {
//     const response = await client.getEntries({
//       content_type: "galleryVideo",
//     });

//     const formattedGalleryVideos = response.items.map((item) => {
//       return {
//         date: item.fields.date,
//         caption: item.fields.caption,
//         url: item.fields.image.fields.file.url,
//       };
//     });

//     return formattedGalleryVideos;
//   } catch (error) {
//     console.error("Error fetching gallery videos from Contentful:", error);
//     throw error;
//   }
// };

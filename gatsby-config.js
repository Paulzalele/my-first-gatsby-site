module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "What would you like to call your site?✔ · My First Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
      bucketName: "paulsalele",
      },
    },
  ],
};

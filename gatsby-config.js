module.exports = {
  siteMetadata: {
    origin: "https://brandonk.dev",
    title: "Brandon Kiser",
    keywords: ["software developer", "software engineer", "personal site"],
    description:
      "Full stack software developer.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

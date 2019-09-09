module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/components/DefaultHead`,
      },
    },
  ]
};
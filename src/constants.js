module.exports = {
  createPagesQuery: `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              body
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date
                desc
              }
              body
              timeToRead
              fileAbsolutePath
            }
          }
        }
      }
    `,
};

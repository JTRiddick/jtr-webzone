const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const portfolioItemTemplate = path.resolve(`src/templates/PortfolioTemplate.js`);

  return graphql(`{
    allImageSharp {
     edges {
       node {
         id
       }
     }
   }
 }`).then(result => {
   if (result.errors){
     return Promise.reject(result.errors);
   }
  result.data.allImageSharp.edges
    .forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: portfolioItemTemplate,
        context: {}
      });

    });
  });
}

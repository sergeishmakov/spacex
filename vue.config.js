module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end()
      .rule("sass-loader")
      .test(/\.s[ac]ss$/i)
      .use("sass-loader")
      .loader("sass-loader")
      .end();
  }
};

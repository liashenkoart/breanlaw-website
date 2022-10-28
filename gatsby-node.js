exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  createRedirect({
    fromPath: `/tmep/*`,
    toPath: `https://tmepmain.gtsb.io/tmep/*`,
    statusCode: 200,
  })

  createRedirect({
    fromPath: `/static/*`,
    toPath: `https://tmepmain.gtsb.io/static/*`,
    statusCode: 200,
  })

}

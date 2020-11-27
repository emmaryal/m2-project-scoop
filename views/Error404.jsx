const React = require("react");
const Layout = require("./Layout");



function error404() {
  return (
    <Layout title="Home Page">
      <h1>WHOOPSY!!! FILE NOT FOUND....</h1>
    </Layout>
  );
}

module.exports = Error404;

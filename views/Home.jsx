const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>

      <input type="text" name="search" placeholder="Paper towel"/>
        <button type="search">Find a Tip</button>

    </Layout>
  );
}

module.exports = Home;

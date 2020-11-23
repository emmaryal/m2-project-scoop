const React = require("react");
const Layout = require("./Layout");

function MyTips(props) {
  return (
    <Layout title="My List of Tips" user={props.user}>
      <h1>My List of Tips</h1>
    </Layout>
  );
}

module.exports = MyTips;

const React = require("react");
const Layout = require("./Layout");

function Tips(props) {
  return (
    <Layout title="Top Tip" user={props.user}>
      <h1>One  Tip</h1>
      
    </Layout>
  );
}

module.exports = Tips;
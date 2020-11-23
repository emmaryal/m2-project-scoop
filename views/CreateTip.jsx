const React = require("react");
const Layout = require("./Layout");

function CreateTip(props) {
  return (
    <Layout title="Create New Tip" user={props.user}>
      <h1>Create a Tip</h1>
      
    </Layout>
  );
}

module.exports = CreateTip;
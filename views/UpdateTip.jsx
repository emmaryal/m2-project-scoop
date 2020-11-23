const React = require("react");
const Layout = require("./Layout");

function UpdateTip(props) {
  return (
    <Layout title="Update or Delete Tip" user={props.user}>
      <h1>Update or Delete a Tip</h1>
      
    </Layout>
  );
}

module.exports = UpdateTip;
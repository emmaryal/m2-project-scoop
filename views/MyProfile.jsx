const React = require("react");
const Layout = require("./Layout");

function MyProfile(props) {
  return (
    <Layout title="My Profile" user={props.user}>
      <h1>My Profile</h1>
      <p>
          <p>Props.email:{props.user.email}</p>
        <a href={`/private/myprofile?userid=${props.user._id}`}>see more</a>
        <br />
        <a href={`/private/mytipslist?userid=${props.user._id}`}>link to my tips list{props.user._id}</a>
      </p>
      
    </Layout>
  );
}
module.exports = MyProfile;

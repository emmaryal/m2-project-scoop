const React = require("react");
const Layout = require("./Layout");

function MyProfile(props) {
  return (
    <Layout title="My Profile" user={props.user}>
      <h1>My Profile</h1>
      <p>
          <p>Welcome to your private area, {props.user.email}</p>
          <br />
          <p>display the user data here and the profile photo</p>
      {/*<a href={`/private/myprofile?userid=${props.user._id}`}>see more</a> */}
        <br />  
 <a href={`/private/mytipslist`}>link to my tips list</a>
  </p> 
      
    </Layout>
  );
}
module.exports = MyProfile;

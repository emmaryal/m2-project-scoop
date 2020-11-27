const React = require("react");
const Layout = require("./Layout");

function MyProfile(props) {
  console.log("myprofile", props)
  return (
    <Layout title="My Profile" user={props.user}>
      <div className="claim" id="modal-name">

      <div className=" claim modal-sandbox"></div>
      <h1 className="inner-title" >{props.user.name}'s Profile</h1>
      <div className="modal-box">
            <div className="modal-header">
                <img src={props.user.image} className="inner-img" alt=""/>
            </div>
            <div className="modal-body">
                <div className="inner-text">Welcome to your private area, {props.user.name}</div>
                <br/>
                <a href={`/private/mytipslist`}>> See or edit my tips</a>
            </div>
        </div>
    </div>  
      

      
    </Layout>
  );
}
module.exports = MyProfile;

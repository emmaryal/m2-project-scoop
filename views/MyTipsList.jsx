const React = require("react");
const Layout = require("./Layout");
const Profile = require("./MyProfile");
const Tips = require ("./../models/Tips.models")



function MyTipsList(props) {
  //console.log("props on tips list page: ", props);
    return (
      <Layout title="My Tips" user={props.user}>
    
        <h1>My Tips</h1>
      {props.oneUser.createdTips !== [] ? 
        (props.oneUser.createdTips.map((oneTip, i) => {
          console.log("PROPS FOR MAPPING", props.oneUser)
         return (
           <div>
             <h3 key={i}>{oneTip.title}</h3>
             <p>{oneTip.description}</p>
             <p>{oneTip.text}</p>
           </div>
         )}))
         :
(<div>no tips to display <br /><a href="/private/createtip">
create tip
</a></div>)
       
    }
      </Layout>
    );
  }
  module.exports = MyTipsList;

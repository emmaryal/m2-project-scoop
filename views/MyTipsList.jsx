const React = require("react");
const Layout = require("./Layout");
const Profile = require("./MyProfile");



function MyTipsList(props) {
  console.log("props on tips list page: ", props);
    return (
      <Layout title="My List of Tips" user={props.user}>
    
        <h1>My List of Tips</h1>
      {props.oneUser.createdTips ? 
        (props.oneUser.createdTips.map((oneTip, i) => {
          console.log("PROPS FOR MAPPING", props.tips)
         return (
           <div>
             <h3 key={i}>{tip.title}</h3>
             <p>{tip.description}</p>
             <p>{tip.text}</p>
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

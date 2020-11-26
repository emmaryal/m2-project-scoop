const React = require("react");
const Layout = require("./Layout");
const Profile = require("./MyProfile");
const Tips = require ("./../models/Tips.models")



function MyTipsList(props) {
  
    return (
      <Layout title="My List of Tips" user={props.user}>
    
        <h1>My List of Tips</h1>
     
        {props.user.createdTips !== [] ? 
          (props.user.createdTips.map((oneTip, i) => {

         return (
           <div>
             <h3 key={i}>{oneTip.title}</h3>
             <p>{oneTip.description}</p>
             <p>{oneTip.text}</p>
             
             <a href={`/private/tips/edit/?tipid=${oneTip.id}`}>edit this tip</a>
             <br />
             <form action={`/private/tips/delete/?tipid=${oneTip.id}`} method="POST">
             <button type = "submit" >delete this tip</button>
           {/* <p>{oneTip.id}</p> */}
           </form>
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

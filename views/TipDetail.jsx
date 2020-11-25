const React = require("react");
const Card = require("./components/Card");
const Layout = require("./Layout");

function TipDetail(props) {
  console.log("props from alltips to tip detail page", props)
  
  return (
    
    <Layout  user={props.user}>
      <h1>Tip Detail</h1>
      <h3>{props.oneTip.title}</h3>
     <p>{props.oneTip.description}</p>
      <p>{props.oneTip.text}</p> 
      
      <Card 
        image = {props.image}
        title = {props.title}
        description = {props.description}
        text = {props.text}
      />
    </Layout>  
  );
}

module.exports = TipDetail;
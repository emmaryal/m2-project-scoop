const React = require("react");
const Card = require("./components/Card");
const Layout = require("./Layout");

function TipDetail(props) {
  <h1>Tip Detail</h1>
  return (
    <Layout  user={props.user}>
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
const React = require("react");
const Card = require("./components/Card");
const Layout = require("./Layout");

function TipDetail(props) {
  console.log("props from alltips to tip detail page", props)
  
  return (
    <Layout>
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
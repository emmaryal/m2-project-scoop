const React = require("react");
const Card = require("./components/Card");
const Layout = require("./Layout");

function TipDetail(props) {
  console.log("detail", props);
  
  return (
    <Layout>
    <h3 className="tip-title">Zero waste is a Journey.</h3>
    <h5 className="tip-subtitle">Small steps add up to big results</h5>
      <Card 
        image = {props.oneTip.image}
        title = {props.oneTip.title}
        description = {props.oneTip.description}
        text = {props.oneTip.text}
      />
    </Layout>  
  );
}

module.exports = TipDetail;
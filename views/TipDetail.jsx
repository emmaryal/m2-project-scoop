const React = require("react");
const CardDetail = require("./components/CardDetail");
const Layout = require("./Layout");

function TipDetail(props) {
  console.log("tipdetail",props)
  return (
    <Layout>
    <h3 className="tip-title">Zero waste is a Journey.</h3>
    <h5 className="tip-subtitle">Small steps add up to big results</h5>
      <CardDetail 
        image = {props.oneTip.image}
        title = {props.oneTip.title}
        description = {props.oneTip.description}
        text = {props.oneTip.text}
        id = {props.oneTip._id}
      />
    </Layout>  
  );
}

module.exports = TipDetail;
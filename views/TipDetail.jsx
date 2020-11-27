const React = require("react");
const CardDetail = require("./components/CardDetail");
const Layout = require("./Layout");

function TipDetail(props) {
  console.log("tipdetail",props)
  return (
    <Layout>
      <div className="claim">
        <h1 className="">Zero waste is a Journey.</h1>
        <h5 className="">Small steps add up to big results</h5>
      </div>
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
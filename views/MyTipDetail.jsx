const React = require("react");
const MyCardDetail = require("./components/MyCardDetail");
const Layout = require("./Layout");

function MyTipDetail(props) {
  console.log("myTipdetail",props)
  return (
    <Layout>
     <div className="claim">
      <h5 className="tip-subtitle">Small steps add up to big results</h5>	        <h1 className="">Zero waste is a Journey.</h1>
      <h5 className="">Small steps add up to big results</h5>
     </div>
      <MyCardDetail 
        image = {props.oneTip.image}
        title = {props.oneTip.title}
        description = {props.oneTip.description}
        text = {props.oneTip.text}
        id = {props.oneTip._id}
      />
    </Layout>  
  );
}

module.exports = MyTipDetail;
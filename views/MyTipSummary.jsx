const React = require("react");
const MyCard = require("./components/MyCard");

function MyTipSummary(props) {
    console.log("sum", props)
    return (
      <div>
          <MyCard 
              image = {props.image}
              title = {props.title}
              description = {props.description}
              link = {props.link}
              userId = {props.user ? props.user._id : null}
          />
      </div>
    );
  }

  module.exports = MyTipSummary;  
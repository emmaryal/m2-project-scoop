const React = require("react");

function Card(props) {
  console.log("card", props)
  return (
    <div id="tip" className=" post-box post-box-li card">
      <h4 className="tip-title card-tip-h3">{props.title}</h4> 
      <p className="tip-text card-div-p" >{props.description}</p>
    </div>
  );
}


module.exports = Card;

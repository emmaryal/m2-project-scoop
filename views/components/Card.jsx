const React = require("react");

function Card(props) {
  return (
    <div>
      <h1>Tip</h1> 
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

module.exports = Card;

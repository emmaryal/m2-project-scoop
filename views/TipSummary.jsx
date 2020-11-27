const React = require("react");
const Card = require("./components/Card");

function TipSummary(props) {
  return (
    <div>
        <Card 
            image = {props.image}
            title = {props.title}
            description = {props.description}
            link = {props.link}
        />
    </div>
  );
}

module.exports = TipSummary;
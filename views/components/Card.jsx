const React = require("react");

function Card(props) {
  console.log("card", props)
  return (
    <div className="card">
      <a className="button" href={`./tipdetail/?tipid=${props.link}`}>
        <img src={props.image} alt=""/>
      </a>
      <div>
        <a href={`./tipdetail/?tipid=${props.link}`}>
          <h3>{props.title}</h3>
        </a>
        <p>{props.description}</p>
      </div>
      <div>
        <a className="button" href={`./tipdetail/?tipid=${props.link}`}>Explore</a>
      </div>
    </div>
  );
}


module.exports = Card;

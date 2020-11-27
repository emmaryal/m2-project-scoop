const React = require("react");

function CardDetail(props) {
  console.log("cardDetail", props)
  return (
    <div className="" id="modal-name">
      <div className="modal-sandbox"></div>
      <div className="modal-box">
            <div className="modal-header">
                <img src={props.image} className="inner-img" alt=""/>
            </div>
            <div className="modal-body">
                <h2 className="inner-title">{props.title}</h2>
                <div className="inner-text">{props.text}</div>
            </div>
        </div>
    </div>  
  );
}

module.exports = CardDetail;
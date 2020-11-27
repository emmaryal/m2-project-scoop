const React = require("react");

function MyCardDetail(props) {
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
                <div className="detail-btn">
                    <a href={`/private/tips/edit/?tipid=${props.id}`}>
                        <button className="primary margin-left-30">
                            Edit
                        </button>
                    </a>
                    <form
                        action={`/private/tips/delete?tipid=${props.id}`}
                        method="POST">
                        <button className="prev-post margin-left-30">Delete</button>                 
                    </form>
                </div>
            </div>
        </div>
    </div>  
  );
}

module.exports = MyCardDetail;

const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function UpdateTip(props) {
  
  return (
  
    <Layout title="UpdateTip" user={props.user}>
      <div className="claim">
        <h1>Edit a Tip</h1>
        <div className="search-container">
          <form action={`/private/tips/edit/?tipid=${props.oneTip._id}`} method="POST">
          <input className="search-bar" type="text" name="title" value={props.oneTip.title}/>
           <br />
           <input className="search-bar" type="text" name="description" value={props.oneTip.description}/>
           <br />
           <input className="search-bar" type="text" name="text" value={props.oneTip.text}/>
           <br />
           <input className="search-bar" type="text" name="image" value={props.oneTip.image}/>
           <br />
           <button className="update-button shadow primary form-button" type="submit">
             Update
           </button>
          </form>
        </div>
        
      </div>
      

    </Layout>
  );
}

module.exports = UpdateTip;

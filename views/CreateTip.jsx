const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function CreateTip(props) {
  return (
    <Layout title="Create Tip"  user={props.user}>
       <div className="claim"></div>
       
       <h1>Create a new Tip</h1>
        <div className="search-container">
          <form id="tip-form" action="/private/createtip" method="POST">
            <br/>
            <input className="search-bar" type="text" name="title" placeholder="Give your tip a title!"/>
            <br/>
            <input className="search-bar" type="text" name="description" placeholder="Add a short description" />
            <br/>
            <input className="search-bar" type="text" name="text" placeholder="You can write your content here"/>
            <input className="search-bar" type="text" name="image" placeholder="Add a tip image"/>
            <button className="shadow primary form-button" type="submit">Create Tip</button>

            {
              props.errorMessage ? 
                (<div classnName="error-message">{props.errorMessage}</div>):null
            }
          </form>
        </div>
    </Layout>
  );
}

module.exports = CreateTip;
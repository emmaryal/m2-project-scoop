const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function CreateTip(props) {
  return (
    <Layout title="Create Tip">

      <h1>Create new Tip</h1>

      <form id="tip-form" action="/private/createtip" method="POST">
        <label>Title</label>
        <br/>
        <imput type="text" name="tip-tittle" placeholder="Give your tip a tittle!"/>
        <br/>
        <imput type="text" name="tip-description" placeholder="2 lines description" />
        <br/>
        <imput type="text" name="tip-content" placeholder="You can write your tip here"/>
        <button ttype="submit">Create Tip</button>

        {
          props.errorMessage ? 
            (<div classnName="error-message">{props.errorMessage}</div>):null
        }
      </form>

    </Layout>const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function CreateTip(props) {
  return (
    <Layout title="Create Tip">

      <h1>Create new Tip</h1>

      <form id="tip-form" action="/private/createtip" method="POST">
        <label>Title</label>
        <br/>
        <imput type="text" name="tip-tittle" placeholder="Give your tip a tittle!"/>
        <br/>
        <imput type="text" name="tip-description" placeholder="2 lines description" />
        <br/>
        <imput type="text" name="tip-content" placeholder="You can write your tip here"/>
        <button ttype="submit">Create Tip</button>

        {
          props.errorMessage ? 
            (<div classnName="error-message">{props.errorMessage}</div>):null
        }
      </form>

    </Layout>
  );
}

module.exports = CreateTip;
  );
}

module.exports = CreateTip;
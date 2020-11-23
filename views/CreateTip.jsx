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
        <input type="text" name="title" placeholder="Give your tip a tittle!"/>
        <br/>
        <input type="text" name="description" placeholder="2 lines description" />
        <br/>
        <input type="text" name="content" placeholder="You can write your tip here"/>
        <button type="submit">Create Tip</button>

        {
          props.errorMessage ? 
            (<div classnName="error-message">{props.errorMessage}</div>):null
        }
      </form>

    </Layout>
  );
}

module.exports = CreateTip;
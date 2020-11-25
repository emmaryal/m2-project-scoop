const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function UpdateTip(props) {
  console.log("props on update tips page: ", props);
  return (
  
    <Layout title="Update or Delete Tip">

      <h1>Update or Delete a Tip</h1>

      <form action={`tips/edit/5fbe29001235b210c81e9bdc`} method="POST">
        <label>Title:</label>
  {/*      <input type="text" name="title" value={props.oneTip.title}/>
        <br />

        <label>Description:</label>
        <input type="text" name="description" value={props.oneTip.description}/>
        <br />

        <label>Text:</label>
        <input type="text" name="text" value={props.oneTip.text}/>
        <br />
  */}
        <button class="update-button" type="submit">
          UPDATE
        </button>
      </form>

    </Layout>
  );
}

module.exports = UpdateTip;

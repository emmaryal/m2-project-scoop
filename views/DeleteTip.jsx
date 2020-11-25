const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function DeleteTip(props) {
  console.log("props on update tips page: ", props);
  return (
  
    <Layout title="Delete Tip">

      <h1>Delete a Tip</h1>

      <form action={`./../private/mytipslist`} method="POST">
      <label>Title:</label>
       <input type="text" name="title" value={props.oneTip.title}/>
        <br />

        <label>Description:</label>
        <input type="text" name="description" value={props.oneTip.description}/>
        <br />

        <label>Text:</label>
        <input type="text" name="text" value={props.oneTip.text}/>
        <br />
  
        <button className="update-button" type="submit">
          UPDATE
        </button>
      </form>

    </Layout>
  );
}

module.exports = DeleteTip;

const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function UpdateTip(props) {
  return (
    <Layout title="Update or Delete Tip">

      <h1>Update or Delete a Tip</h1>

      <form id="updatetip-form" action={`/tips/update?tipid=${props.oneTip._id}`}  method="POST">
        <label>Title:</label>
        <input type="text" name="title" value={props.oneTip.title}/>
        <br />

        <label>Description:</label>
        <input type="text" name="description" value={props.oneTip.description}/>
        <br />

        <label>Content:</label>
        <input type="text" name="content" value={props.oneTip.content}/>
        <br />

        <button class="update-button" type="submit">
          UPDATE
        </button>
      </form>
      
    </Layout>
  );
}

module.exports = UpdateTip;

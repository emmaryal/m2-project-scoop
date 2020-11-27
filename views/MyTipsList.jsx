const React = require("react");
const Layout = require("./Layout");
const MyTipSummary = require ("./MyTipSummary")

function MyTipsList(props) {
  console.log("mytrips",props.user)
    return (
      <Layout title="My Tips" user={props.user}>
        <div className="claim" >
          <h1>Tips</h1>
        </div>
        {props.user.createdTips !== [] ? 
        (props.user.createdTips.map((tip, i) => { 
          console.log(tip) 
          return (
            <MyTipSummary
              image = {tip.image}
              key = {i}
              title = {tip.title}
              description = {tip.description}
              link = {tip._id}
              user = {props.user}
            />
          )})) :
          (
            <div>no tips to display <br />
              <a href="/private/createtip">
                create tip
              </a>
            </div>
          )
       
    }
      </Layout>
    );
  }
  module.exports = MyTipsList;

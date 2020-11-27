const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function AllTips(props) {const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");
const TipSummary = require("./TipSummary");

function AllTips(props) {
  return (
    <Layout title="Tips for Zero Waste Living" user={props.user}>
      <div className=""> 
        <div className="claim">
          <h1 >Top Tips for Zero Waste Living</h1>
        </div>
        <div>
          {props.tips.map((tip, i) => {
            return (
              <TipSummary
                image = {tip.image}
                key = {i}
                title = {tip.title}
                description = {tip.description}
                link = {tip._id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = AllTips;
  return (
    <Layout title="Tips for Zero Waste Living" user={props.user}>
     <div className="results-background full-height">
      <h1 id="claim">Top Tips for Zero Waste Living</h1>
      {props.tips.map((tip, i) => {
        return (
          <Card
            title = {tip.title}
            description = {tip.description}
            text = {tip.text}
            link = {tip.id}
          />
        );
      })}
     </div>
    </Layout>
  );
}

module.exports = AllTips;

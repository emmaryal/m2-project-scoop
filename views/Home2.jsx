const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");
const SearchBar = require("./components/SearchBar");


function Home() {
  return (
    <Layout title="Home Page">
      <SearchBar
      
      />
    </Layout>
  );
}

module.exports = Home;

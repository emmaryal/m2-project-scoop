const React = require("react");
const Layout = require("./Layout");

function Home(props) {
    return (
        <Layout title="Home Page">
         <div class="cover occupy-space" >
            <form id="form" action="/alltips" method="GET" class="flex-form" >
            <h1 id="claim" >Zero waste lifestyle tips</h1>
                <input 
                type="text" 
                name="search" 
                id="search-bar" 
                className="shadow" 
                type="search"
                placeholder="Paper towel"/>
                <button type="submit"
                id="search-button" 
                className="shadow"
                >
                 Find a Tip
                </button>
            </form>
      </div>
        </Layout>
    );
}

module.exports = Home;
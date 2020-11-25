const React = require("react");
const Layout = require("./Layout");

function Home() {
    return (
        <Layout title="Home Page">
         <div class="cover occupy-space" >
            <form id="form" action="/alltips" method="GET" class="flex-form" >
            <h1>Zero waste lifestile tips</h1>
                <input 
                type="text" 
                name="search" 
                id="search-bar" 
                class="shadow" 
                type="search"
                placeholder="Paper towel"/>
                <button type="submit"
                id="search-button" 
                class="shadow"
                >
                 Find a Tip
                </button>
            </form>
      </div>
        </Layout>
    );
}

module.exports = Home;
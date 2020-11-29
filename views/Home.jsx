const React = require("react");
const Layout = require("./Layout");

function Home(props) {
    return (
        <Layout title="Scoop lifestyle tips">
         <div className="cover-image occupy-space full-height">
            <form id="form" action="/alltips" method="GET" class="flex-form" >
                <div className="claim home-title space-above">
                    <h1  >Zero waste</h1>
                    <h1  >lifestyle tips</h1>
                    <div className="search-container">
                    <input 
                        type="text" 
                        name="search" 
                        id="search-bar" 
                        className="shadow" 
                        type="search"
                        placeholder="Honey bee wrap"/>
                    <button type="submit"
                        id="search-button" 
                        className="shadow primary"
                    >
                        Find a Tip
                    </button>
                    </div>
                </div>

            </form>
         </div>
        </Layout>
    );
}

module.exports = Home;
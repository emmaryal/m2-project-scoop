const React = require("react");
const Layout = require("./Layout");

function Home() {
    return (
        <Layout title="Home Page"  user={props.user}>
            <form id="form" action="/alltips" method="GET">
                <h1>Home Page</h1>

                <input type="text" name="search" placeholder="Paper towel"/>
                <button type="search">Find a Tip</button>
            </form>
        </Layout>
    );
}

module.exports = Home;
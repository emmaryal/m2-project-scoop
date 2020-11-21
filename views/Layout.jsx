const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "Scoop"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <link rel="stylesheet" href="/public/stylesheets/createtip.css" />
      </head>

      <body>{props.children}</body>
    </html>
  );
}

module.exports = Layout;

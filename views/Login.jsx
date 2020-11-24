const React = require("react");
const Layout = require("./Layout");
function Login(props) {
  return (
    <Layout title="Login Page" user={props.user}>
      <div className="form-wrapper">
        <form className="auth-form" action="/auth/login" method="POST">
          <input type="email" name="email" placeholder="Please enter your email" />
          <input type="password" name="password" placeholder="Please enter your password" />
          <button className = "form-button" type="submit">Login</button>
      <div className="message-container">
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage}</div>
        ) : null}
        <p className="account-message">
          Don't have an account? <a href="/auth/signup">Sign up</a>
        </p>
      </div>
      </form>
      </div>
    </Layout>
  );
}
module.exports = Login;
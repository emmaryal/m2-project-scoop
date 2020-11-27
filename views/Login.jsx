const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Login Page" user={props.user}>
     
      <div className="form-wrapper claim">
        <h1>Login</h1>
        <div className="search-container">
        <form className="auth-form" action="/auth/login" method="POST">
          <input
            type="email"
            name="email"
            className="search-bar margin-left-50"
            placeholder="Please enter your email"
          />

          <input
            type="password"
            name="password"
            className="search-bar margin-left-50"
            placeholder="Please enter your password"
          />

          <button id="margin-left-4"className="shadow form-button primary margin-left-50" type="submit">
            Login
          </button>

          <div className="message-container margin-left-30">
            {props.errorMessage ? (
              <div className="error-message"> {props.errorMessage}</div>
            ) : null}

            <p className="account-message margin-left-30">
              Don't have an account? <a href="/auth/signup">Sign up</a>
            </p>
          </div>
        </form>

        </div>

      </div>
    </Layout>
  );
}
module.exports = Login;

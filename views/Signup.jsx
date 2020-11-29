const React = require("react");
const Layout = require("./Layout");
function Signup(props) {
  return (
    <Layout title="Sign Up Page" user={props.user}>
      <div className="claim">
        <h1>Sign up</h1>
      </div>
      <div className = "form-wrapper"><form className="auth-form" action="/auth/signup" method="POST">
        <input className="search-bar" type="name" name="name" placeholder="Name" />
        <input className="search-bar" type="email" name="email" placeholder="Email" />
        <input className="search-bar" type="password" name="password" placeholder="Password"/>
        <input className="search-bar" type="password" name="repeatpassword" placeholder="Please repeat your password" />
        <input className="search-bar" type="name" name="image" placeholder="Profile pic"/>
        <button className = "form-button primary shadow" type="submit">Create account</button>
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
      </div>
    </Layout>
  );
}
module.exports = Signup;
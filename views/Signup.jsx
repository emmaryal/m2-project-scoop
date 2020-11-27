const React = require("react");
const Layout = require("./Layout");
function Signup(props) {
  return (
    <Layout title="Sign Up Page" user={props.user}>
      <div className = "form-wrapper"><form className="auth-form" action="/auth/signup" method="POST">
        <input type="name" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password"/>
        <input type="password" name="repeatpassword" placeholder="Please repeat your password" />
        <input type="name" name="image" placeholder="Profile pic"/>
        <button className = "form-button" type="submit">Create account</button>
        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
      </div>
    </Layout>
  );
}
module.exports = Signup;
const React = require("react");
const Layout = require("./Layout");


function Signup(props) {
  return (
    <Layout title="Sign Up Page">
      <div className = "form-wrapper"><form className="auth-form" action="/auth/signup" method="POST">
        
        <input type="email" name="email" placeholder="Please enter your email" />

        
        <input type="password" name="password" placeholder="Please enter a password"/>
       
        <input type="password" name="repeatpassword" placeholder="Please repeat your password" />

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

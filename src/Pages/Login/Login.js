import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    facebooksignIn,
    handleEmailPassowrdLogin,
    handleEmail,
    handlePassowrd,
  } = useAuth();

  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/services'

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
        history.push(redirect_url)
      });
    }

  return (

      <div className="text container ">
        <div className="row">
          <div className="login-area col-md-6">
            <div>
              <div className="login-style">
                <div>
                  <div className="login-style">
                    <h2 className="text-primary">Pease Login</h2>
                    <form onSubmit={handleEmailPassowrdLogin}>
                      <input
                       onChange={handleEmail}
                        className="input-style"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                      />
                      <br />
                      <input
                      onChange={handlePassowrd}
                        className="input-style"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                      />
                      <input
                        className="mt-3 w-50 btn m-auto user-style"
                        type="submit"
                        value="Login"
                      />
                    </form>
                    <br />
                    <div>Create New Account <Link to="/signUp">SignUp</Link></div>
                  </div>
                  <Button
                    onClick={facebooksignIn}
                    className="me-2"
                    variant="info"
                  >
                    Login with Facebook
                  </Button>

                  <Button
                    onClick={handleGoogleLogin}
                    className="me-2"
                    variant="info"
                  >
                    Login with google
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="image-fluid w-100"
                src="https://i.ibb.co/tJDhQMp/4957136.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> 
  );
};

export default Login;

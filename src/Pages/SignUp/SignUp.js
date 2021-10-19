import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/UseAuth";

const SignUp = () => {
  const { handleEmailPassowrdSignUp, handleEmail, handlePassowrd } = useAuth();
  return (
    <div>
      <div className="text container ">
        <div className="row">
          <div className="login-area col-md-6">
            <div>
              <div className="login-style d-flex justify-content-center">
                <div>
                  <div className="login-style">
                    <h2 className="text-primary">Pease SignUp</h2>
                    <form onSubmit={handleEmailPassowrdSignUp}>
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
                        value="SignUp"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="image-fluid w-100"
                src="https://i.ibb.co/fqvyQBW/regiestation.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default SignUp;

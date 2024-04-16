import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import "./style.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik>
                {(formik) => (
                  <Form>
                    <input type="text" />
                    <input type="text" />
                    <button className="blue_btn" type="submit">
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link className="forgot_password" to="/forgot">
                Forgot password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Crete Account</button>
            </div>
            <Link className="sign_extra" to="/">
              <b>Create a Page </b>
              for a celebrity, band or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Form, Formik, Field } from "formik";
import RegisterInput from "../inputs/registerInput/RegisterInput";

export default function RegisterForm() {
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };
  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => index + 1);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  console.log(months);
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>It's quick and easy</span>
        </div>
        <Formik>
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Surname"
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Mobile number or email address"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="New password"
                  name="password"
                  onChange={handleRegisterChange}
                />
                <div className="reg_col">
                  <div className="reg_line_header">
                    Date of birth <i className="info_icon"></i>
                  </div>
                  <div className="reg_grid">
                    <select
                      name="bMonth"
                      value={bMonth}
                      onChange={handleRegisterChange}
                    >
                      {months.map((month, i) => {
                        console.log(month);
                        return (
                          <option value={month} key={i}>
                            {month}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="bDay"
                      value={bDay}
                      onChange={handleRegisterChange}
                    >
                      {days.map((day, i) => (
                        <option value={day} key={i}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select
                      name="bYear"
                      value={bYear}
                      onChange={handleRegisterChange}
                    >
                      {years.map((year, i) => (
                        <option value={year} key={i}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="reg_col">
                  <div className="reg_line_header">
                    Gender <i className="info_icon"></i>
                  </div>
                  <div className="reg_grid">
                    <label htmlFor="male">
                      Male
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={handleRegisterChange}
                      />
                    </label>
                    <label htmlFor="female">
                      Female
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={handleRegisterChange}
                      />
                    </label>
                    <label htmlFor="custom">
                      Custom
                      <input
                        type="radio"
                        name="gender"
                        id="custom"
                        value="custom"
                        onChange={handleRegisterChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="reg_infos">
                  By Clicking Sign Up, you agree to our{" "}
                  <span>Terms, Data Policy &nbsp;</span>
                  and <span>Cookie Policy.</span> You may receive SMS
                  notifications from us and can opt out at any time.
                </div>
                <div className="reg_btn_wrapper">
                  <button className="blue_btn open_signup">Sign Up</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

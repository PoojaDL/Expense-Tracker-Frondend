import { Fragment, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

import classes from "./SignUp.module.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const path = process.env.REACT_APP_PATH;

const SignUp = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [load, setLoad] = useState(false);
  const history = useHistory();
  const emailInput = useRef();
  const nameInput = useRef();
  const passInput = useRef();
  const confPassInput = useRef();

  const switchAuthModeHandler = (e) => {
    e.preventDefault();
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const password = passInput.current.value;
    let confPassword = "";

    if (name && email && password) {
      setLoad(true);
      let data = {
        name: name,
        email: email,
        password: password,
      };

      if (isLogin) {
        axios
          .post(path + "auth", data)
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("expenseUser", res.data.token);
              props.setToken();
              history.replace("./");
            } else {
              console.log(res.response.data);
            }
          })
          .catch((err) => alert(err.response.data.message));
      }

      if (!isLogin) {
        confPassword = confPassInput.current.value;
        data = { ...data, confPassword: confPassword };
        axios
          .post(path + "auth/signUp", data)
          .then((res) => {
            // console.log(res);
            props.setToken();
            history.replace("./");
          })
          .catch((err) => alert(err.response.data.message));
      }

      setLoad(false);
    } else {
      alert("Enter the inputs before submitting");
    }
  };

  return (
    <div>
      <Fragment>
        <div className={classes.auth}>
          <Form onSubmit={formSubmitHandler}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput0"
              aria-required
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={nameInput}
                type="text"
                placeholder="Your name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              aria-required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailInput}
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput3"
              required
            >
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passInput} type="password" />
            </Form.Group>
            {!isLogin && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
                required
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control ref={confPassInput} type="password" />
              </Form.Group>
            )}
            {isLogin && (
              <Link to="/forgotpassword" style={{ color: "red" }}>
                forgot password?
              </Link>
            )}
            <div className={classes.actions}>
              {load ? (
                <p style={{ color: "black" }}>Sending request...</p>
              ) : (
                <button>{isLogin ? "Login" : "Create account"}</button>
              )}

              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                <p style={{ color: "white" }}>
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account"}
                </p>
              </button>
            </div>
          </Form>
        </div>
      </Fragment>
    </div>
  );
};

export default SignUp;

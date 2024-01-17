import { Fragment, useRef } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

import classes from "./SignUp.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const path = process.env.REACT_APP_PATH;

const ResetPassword = () => {
  const passwordInput = useRef();
  const { id, token } = useParams();

  const resetPassHandler = (e) => {
    e.preventDefault();
    // console.log(passwordInput.current.value);
    const password = passwordInput.current.value;

    axios
      .post(path + `auth/resetpassword/${id}/${token}`, {
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Changed password successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Fragment>
        <div className={classes.auth}>
          <Form onSubmit={resetPassHandler}>
            <h1>Reset Password</h1>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              aria-required
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordInput}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <div className={classes.actions}>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </div>
      </Fragment>
    </div>
  );
};

export default ResetPassword;

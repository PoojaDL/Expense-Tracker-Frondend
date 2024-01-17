import { Button, Card, Col, Image, Row } from "react-bootstrap";
// import UpdateForm from "./UpdateForm";
import { Fragment } from "react";
import classes from "./ExpenseItem.module.css";
import axios from "axios";

const path = process.env.REACT_APP_PATH;

const ExpenseItem = (props) => {
  const token = localStorage.getItem("expenseUser");
  // console.log(props);

  const removeItem = () => {
    axios
      .delete(path + `home/${props.id}`, {
        data: { amount: props.amount, category: props.category },
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log(res);
          props.fetchAgain();
        } else {
          console.log("There is problem in deleting");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <Card className={`my-1 mx-auto px-2 ${classes.items}`}>
        <Row className="m-0">
          <Col xs={4} sm={3} className={`d-block ${classes.price}`}>
            {props.subCategory === "Grocery" && (
              <h2 className="pt-2 mb-0">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11015/11015452.png"
                  roundedCircle
                  style={{ width: "3rem", border: "2px solid cyan" }}
                />
              </h2>
            )}
            {props.subCategory === "Salary" && (
              <h2 className="pt-2 mb-0">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11022/11022483.png"
                  roundedCircle
                  style={{ width: "3rem", border: "2px solid cyan" }}
                />
              </h2>
            )}
            {props.subCategory === "Food" && (
              <h2 className="pt-2 mb-0">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11028/11028116.png"
                  roundedCircle
                  style={{ width: "3rem", border: "2px solid cyan" }}
                />
              </h2>
            )}
            {props.subCategory === "Fuel" && (
              <h2 className="pt-2 mb-0">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/9747/9747066.png"
                  roundedCircle
                  style={{ width: "3rem", border: "2px solid cyan" }}
                />
              </h2>
            )}
            {props.subCategory === "Shopping" && (
              <h2 className="pt-2 mb-0">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11137/11137825.png"
                  roundedCircle
                  style={{ width: "3rem", border: "2px solid cyan" }}
                />
              </h2>
            )}
            <p>{props.createdAt}</p>
          </Col>
          <Col xs={5} sm={6}>
            <Row>
              <Col xm={12} sm={6} className="py-auto pt-2">
                <p className={classes.description}>{props.description}</p>
                <p className="p-0 m-0">{props.subCategory}</p>
              </Col>
              <Col xm={12} sm={6} className={` ${classes.price}`}>
                {props.category === "Income" && (
                  <h5 style={{ color: "green" }} className="py-2">
                    +₹{props.amount}
                  </h5>
                )}

                {props.category === "Expense" && (
                  <h5 style={{ color: "red" }} className="py-2">
                    -₹{props.amount}
                  </h5>
                )}
              </Col>
            </Row>
          </Col>
          {/* <Col sm={2} className="py-3"></Col> */}
          <Col xs={3} className="py-2">
            {/* <Button className="btn-sm btn-light" onClick={updateItem}>
            <img
              width="30px"
              src="https://cdn-icons-png.flaticon.com/128/7798/7798765.png"
              alt="delete-png"
            ></img>
          </Button>{" "} */}
            {/* {item && isOpen && (
            <UpdateForm
              email={emailOfUser}
              className={classes.updateForm}
              data={item}
              callfunction={props.callfunction}
              onAnyChange={props.onAnyChange}
              closeBtn={closeUpdateForm}
            />
          )} */}
            <Button className="btn-sm btn-light" onClick={removeItem}>
              <img
                width="30px"
                src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
                alt="delete-png"
              ></img>
            </Button>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default ExpenseItem;

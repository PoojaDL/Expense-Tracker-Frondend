import { Fragment } from "react";
import Styles from "./Statitics.module.css";
import NavBar from "../Navbar/Navbar";
import { Col, Row } from "react-bootstrap";

const Statitics = (props) => {
  let fuel = 0,
    food = 0,
    shopping = 0,
    grocery = 0;

  props.expenses.map((expense) => {
    if (expense.subCategory === "Grocery") {
      grocery += +expense.amount;
    }
    if (expense.subCategory === "Shopping") {
      shopping += +expense.amount;
    }
    if (expense.subCategory === "Food") {
      food += +expense.amount;
    }
    if (expense.subCategory === "Fuel") {
      fuel += +expense.amount;
    }
    return 0;
  });

  let groceryPercent = Math.round((grocery / props.totalExpense) * 100);
  let foodPercent = Math.round((food / props.totalExpense) * 100);
  let fuelPercent = Math.round((fuel / props.totalExpense) * 100);
  let shoppingPercent = Math.round((shopping / props.totalExpense) * 100);

  return (
    <Fragment>
      <NavBar />
      {props.totalExpense > 0 && (
        <div align="center">
          <h2 className="mx-3 my-2">You can analyse your expenses visually</h2>
          <div
            className={`${Styles["my-pie-chart"]} my-2`}
            style={{
              background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(
      #669900 0% ${foodPercent}% ,
      #00203fff ${foodPercent}% ${fuelPercent + foodPercent}%,
      #5f4b8bff ${fuelPercent + foodPercent}% ${
                groceryPercent + fuelPercent + foodPercent
              }%,
      #f95700ff ${groceryPercent + fuelPercent + foodPercent}%
    )`,
            }}
          >
            <h3>Expenses</h3>
          </div>
          <b>{`Total Expense : ₹${props.totalExpense}`}</b>

          <hr />
          <div>
            <h2 className="mx-3 my-2">
              You have spent your income in the below parts of the expenses
            </h2>
            <Row className="m-0">
              <Col xs={12} sm={6} md={6} className="my-2">
                <div
                  className={Styles["progress-bar"]}
                  style={{
                    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#669900 ${foodPercent}%, #ccff66 0)`,
                  }}
                >
                  <progress
                    value={foodPercent}
                    min="0"
                    max="100"
                    style={{
                      visibility: "hidden",
                      height: 0,
                      width: 0,
                    }}
                  ></progress>
                  <b>{`${foodPercent}%`}</b>
                </div>
                <p>{`Food : ₹${food}`}</p>
              </Col>

              <Col xs={12} sm={6} md={6} className="my-2">
                <div
                  className={Styles["progress-bar"]}
                  style={{
                    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#00203fff ${fuelPercent}%, #4da6ff
                    0)`,
                  }}
                >
                  <progress
                    value={fuelPercent}
                    min="0"
                    max="100"
                    style={{
                      visibility: "hidden",
                      height: 0,
                      width: 0,
                    }}
                  ></progress>
                  <b>{`${fuelPercent}%`}</b>
                </div>
                <p>{`Fuel : ₹${fuel}`}</p>
              </Col>
              <Col xs={12} sm={6} md={6} className="my-2">
                <div
                  className={Styles["progress-bar"]}
                  style={{
                    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#5f4b8bff ${groceryPercent}%, #aa9cc9
                    0)`,
                  }}
                >
                  <progress
                    value={groceryPercent}
                    min="0"
                    max="100"
                    style={{
                      visibility: "hidden",
                      height: 0,
                      width: 0,
                    }}
                  ></progress>
                  <b>{`${groceryPercent}%`}</b>
                </div>
                <p>{`Grocery : ₹${grocery}`}</p>
              </Col>
              <Col xs={12} sm={6} md={6} className="my-2">
                <div
                  className={Styles["progress-bar"]}
                  style={{
                    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#f95700ff ${shoppingPercent}%, #ffac80
                    0)`,
                  }}
                >
                  <progress
                    value={shoppingPercent}
                    min="0"
                    max="100"
                    style={{
                      visibility: "hidden",
                      height: 0,
                      width: 0,
                    }}
                  ></progress>
                  <b>{`${shoppingPercent}%`}</b>
                </div>
                <p>{`Shopping : ₹${shopping}`}</p>
              </Col>
            </Row>
          </div>
        </div>
      )}
      <div align="center" className="mt-5">
        {props.totalExpense <= 0 && <h1>You don't have any expenses..! 😐</h1>}
      </div>
    </Fragment>
  );
};

export default Statitics;

import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Styles from "./BannerDesign.module.css";

const BannerDesign = (props) => {
  let { totalExpense, totalIncome } = props.user;

  if (totalExpense === null) {
    totalExpense = 0;
  }
  if (totalIncome === null) {
    totalIncome = 0;
  }

  const percent = Math.round((totalExpense / totalIncome) * 100);

  return (
    <Fragment>
      <div className="mb-5">
        <Card style={{ background: "#3E4064", height: "40%" }}>
          <Row className="m-0">
            <Col xs={8} className="my-auto ps-4">
              <h1
                className="display-5"
                style={{ fontWeight: "bolder", color: "white" }}
              >
                {`Spent ₹${totalExpense}`}
              </h1>
              <h1 style={{ color: "grey" }}>{`of ₹${totalIncome}`}</h1>
            </Col>
            <Col xs={4}>
              <div
                className={Styles["progress-bar"]}
                style={{
                  background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(hotpink ${percent}%, pink 0)`,
                }}
              >
                <progress
                  value={percent}
                  min="0"
                  max="100"
                  style={{
                    visibility: "hidden",
                    height: 0,
                    width: 0,
                  }}
                ></progress>
                {totalIncome > totalExpense && `${percent}%`}
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </Fragment>
  );
};

export default BannerDesign;

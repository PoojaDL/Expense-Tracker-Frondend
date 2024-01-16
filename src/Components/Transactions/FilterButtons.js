import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FilterButtons = (props) => {
  return (
    <Fragment>
      <Link to="/transactions/all">
        <Button
          onClick={props.onClick}
          className="btn btn-light btn-md btn-outline-dark m-2"
        >
          All
        </Button>
      </Link>
      <Link to="/transactions/Salary">
        <Button
          onClick={props.onClick}
          className="btn btn-light btn-md btn-outline-dark m-2"
        >
          Salary
        </Button>
      </Link>
      <Link to="/transactions/Grocery">
        <Button
          onClick={props.onClick}
          className="btn btn-light btn-md btn-outline-dark m-2"
        >
          Grocery
        </Button>
      </Link>
      <Link to="/transactions/Fuel">
        <Button
          onClick={props.onClick}
          className="btn btn-light btn-md btn-outline-dark m-2"
        >
          Fuel
        </Button>
      </Link>

      <Link to="/transactions/Shopping">
        <Button
          onClick={props.onClick}
          className="btn btn-light btn-md btn-outline-dark m-2"
        >
          Shopping
        </Button>
      </Link>
      <Link to="/transactions/Food">
        <Button
          onClick={props.onClick}
          className="btn btn-light btn-md btn-outline-dark m-2"
        >
          Food
        </Button>
      </Link>
    </Fragment>
  );
};

export default FilterButtons;

import { Button, Form } from "react-bootstrap";
import { Fragment, useRef, useState } from "react";
import axios from "axios";
import Styles from "./ExpenseItem.module.css";

const NewExpenseForm = (props) => {
  const [isNewAdded, setNewItem] = useState("");
  const [showExpense, setShowExpense] = useState(false);
  const amountInput = useRef();
  const descInput = useRef();
  const categoryInput = useRef();
  const subCategoryInput = useRef();

  const token = localStorage.getItem("expenseUser");
  // const emailofUser = email.replace(/[^a-z0-9]/gi, "");

  const expenseFormSubmit = (event) => {
    event.preventDefault();

    const dataEntered = {
      amount: amountInput.current.value,
      description: descInput.current.value,
      category: categoryInput.current.value,
      subCategory: subCategoryInput.current.value,
    };

    // console.log(dataEntered);

    if (amountInput.current.value && descInput.current.value) {
      axios
        .post("http://localhost:3030/home", dataEntered, {
          headers: { Authorization: token },
        })
        .then((res) => {
          amountInput.current.value = "";
          descInput.current.value = "";
          props.fetchAgain();
          setNewItem("New Item added");
          setTimeout(() => {
            setNewItem("");
          }, 2000);
        })
        .catch((err) => console.log(err));
    } else {
      alert("enter data");
    }
  };

  const openExpense = () => {
    setShowExpense(true);
  };

  const closeExpense = () => {
    setShowExpense(false);
  };

  return (
    <Fragment>
      <div align="center" className="mt-5 mb-3">
        <h1 className="display-6" style={{ fontWeight: "bold" }}>
          Add New Expense/Income
        </h1>
      </div>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "1.5rem",
          background: "white",
        }}
        className={`p-5 mx-auto mb-5 ${Styles["form-card"]}`}
      >
        {isNewAdded && (
          <div
            style={{ background: "darkred", color: "white" }}
            className="m-3"
            align="center"
          >
            <p>
              <b>{isNewAdded}</b>
            </p>
          </div>
        )}
        {showExpense && (
          <Form onSubmit={expenseFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" ref={amountInput} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" ref={descInput} />
            </Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              ref={categoryInput}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Form.Select>
            <Form.Label>Choose Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              ref={subCategoryInput}
            >
              <option value="Salary">Salary</option>
              <option value="Grocery">Grocery</option>
              <option value="Food">Food</option>
              <option value="Fuel">Fuel</option>
              <option value="Shopping">Shopping</option>
            </Form.Select>
            <div className="pt-5 mx-auto">
              <Button className="me-1 btn-light btn-outline-dark" type="submit">
                Add Item
              </Button>
              <Button
                className="btn-dark btn-outline-light"
                type="button"
                onClick={closeExpense}
              >
                Close
              </Button>
            </div>
          </Form>
        )}
        {!showExpense && (
          <div align="center">
            <Button className="btn-dark" type="button" onClick={openExpense}>
              Add New
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default NewExpenseForm;

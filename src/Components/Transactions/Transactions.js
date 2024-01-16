import { Fragment, useEffect, useRef, useState } from "react";
import NavBar from "../Navbar/Navbar";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import FilterButtons from "./FilterButtons";
import ExpenseItem from "../Home/ExpenseItem";
import Paginations from "./Paginations";
import { Button, Form } from "react-bootstrap";

const Transactions = () => {
  const params = useParams();
  const [expense, setExpense] = useState([]);
  const [callAgain, setCall] = useState(false);
  const [noOfPages, setNo] = useState(1);
  const [noOfItems, setItems] = useState(5);
  const itemsInput = useRef();

  const filterExpenses = (pageNo) => {
    const token = localStorage.getItem("expenseUser");
    if (pageNo === undefined) {
      pageNo = 1;
    }
    if (params.id === "all" && pageNo) {
      axios
        .get(
          `http://localhost:3030/home/${params.id}?page=${pageNo}&items=${noOfItems}`,
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          setNo(res.data.data.lastPage);
          setExpense(res.data.data.products);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:3030/home/${params.id}`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          setExpense(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    filterExpenses();
  }, [callAgain, noOfItems]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setItems(itemsInput.current.value);
  };

  return (
    <Fragment>
      <NavBar />
      <FilterButtons onClick={() => setCall((prev) => !prev)} />
      {params.id === "all" && (
        <div style={{ width: "150px" }} className="ms-5">
          <Form>
            <Form.Select ref={itemsInput} aria-label="Default select example">
              <option>Select no of items to show</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">20</option>
            </Form.Select>
            <Button onClick={formSubmitHandler}>Submit</Button>
          </Form>
        </div>
      )}
      <div align="center">
        {params.id !== "all" ? <h1>{params.id}</h1> : <h1>All Items</h1>}
      </div>
      <div align="center" className="mt-4">
        {expense.length > 0 &&
          expense.reverse().map((item) => {
            let create = item.createdAt.slice(2, 10);
            return (
              <ExpenseItem
                key={item.id}
                id={item.id}
                amount={item.amount}
                description={item.description}
                subCategory={item.subCategory}
                category={item.category}
                createdAt={create}
                fetchAgain={filterExpenses}
              />
            );
          })}
        {expense.length === 0 && <p>No item found</p>}
      </div>
      <div className="mt-5">
        {params.id === "all" && (
          <Paginations
            pageClicked={(data) => {
              filterExpenses(data);
            }}
            pages={noOfPages}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Transactions;

import { Fragment, useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import NewExpenseForm from "./NewExpenseForm";
import axios from "axios";
import ExpenseItem from "./ExpenseItem";
import CategoryDesign from "./CategoryDesign";
import BannerDesign from "./BannerDesign";
import Footer from "../FooterPage/Footer";

const path = process.env.REACT_APP_PATH;

const Home = (props) => {
  const [expense, setExpense] = useState([]);

  const fetchAllExpenses = () => {
    const token = localStorage.getItem("expenseUser");
    axios
      .get(path + "home", { headers: { Authorization: token } })
      .then((res) => {
        // console.log(res.data.data);
        setExpense(res.data.data);
        props.fetchUser();
        props.getExpenses(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllExpenses();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div align="center" className="my-4">
        <h1 className="display-4" style={{ fontWeight: "bolder" }}>
          WelCome To Expense Tracker
        </h1>
      </div>

      <BannerDesign user={props.user} />
      <CategoryDesign />

      <NewExpenseForm fetchAgain={fetchAllExpenses} />
      <div align="center" className="mb-3">
        <h1 className="display-6" style={{ fontWeight: "bold" }}>
          Recent Expenses
        </h1>
      </div>
      <div align="center" className="mb-5">
        {expense.length > 0 &&
          expense.map((item, i) => {
            if (i >= 5) {
              return;
            }
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
                fetchAgain={fetchAllExpenses}
              />
            );
          })}
        {expense.length === 0 && <p>No items found</p>}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

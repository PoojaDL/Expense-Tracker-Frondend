import {
  Redirect,
  Route,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Login/SignUp";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ResetPassword from "./Components/Login/ResetPassword";
import Transactions from "./Components/Transactions/Transactions";
import UserProfile from "./Components/Profile/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import Statitics from "./Components/Statistics/Statitics";

function App() {
  const param = useParams();
  const [token, changedToken] = useState(false);
  const user = localStorage.getItem("expenseUser");
  const [User, setUser] = useState([]);
  const [Expenses, setExpenses] = useState([]);

  const path = process.env.REACT_APP_PATH;

  const fetchUser = () => {
    if (user) {
      axios
        .get(path + "home/user", {
          headers: { Authorization: user },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // eslint-disable-next-line
  console.log(token);

  const getExpensesHandler = (data) => {
    setExpenses(data);
  };

  const changeTokenHandler = () => {
    fetchUser();
    changedToken((prev) => !prev);
  };

  return (
    <div>
      <Route path="/forgotpassword">
        <ForgotPassword />
      </Route>
      <Route path="/resetpassword/:id/:token">
        <ResetPassword />
      </Route>
      {user !== null && (
        <Route path="/transactions/:id" exact>
          <Transactions />
        </Route>
      )}
      {user !== null && (
        <Route path="/profile">
          <UserProfile user={User} setToken={changeTokenHandler} exact />
        </Route>
      )}

      {user !== null && (
        <Route path="/statistics" exact>
          <Statitics expenses={Expenses} totalExpense={User.totalExpense} />
        </Route>
      )}

      {user === null && (
        <Route path="/login" exact>
          <SignUp setToken={changeTokenHandler} />
        </Route>
      )}

      {user !== null && (
        <Route path="/home">
          <Home
            user={User}
            fetchUser={fetchUser}
            getExpenses={getExpensesHandler}
          />
        </Route>
      )}

      <Route path="/" exact>
        {user === null ? <Redirect to="/login" /> : <Redirect to="/home" />}
      </Route>

      <Route path="*">
        {/* {user === null && <Redirect to="/" />} */}
        {user !== null && <Redirect to="/home" />}
      </Route>
    </div>
  );
}

export default App;

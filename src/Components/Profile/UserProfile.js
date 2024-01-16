import { Fragment } from "react";
import ActivatePremium from "./ActivatePremium";
import LeaderBoard from "./LeaderBoard";
import NavBar from "../Navbar/Navbar";
import { Button, Image } from "react-bootstrap";
import DownloadTransaction from "./DownloadTransaction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UserProfile = (props) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("expenseUser");
    history.replace("./");
    props.setToken();
  };

  return (
    <Fragment>
      <NavBar />
      <div align="center" className="mt-5">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
          roundedCircle
          style={{ maxWidth: "80%", border: "2px solid cyan" }}
        />
        <h1 className="display-4" style={{ fontWeight: "bolder" }}>
          {`Hello ${props.user.name},`}
        </h1>
        <h1 className="display-5" style={{ fontWeight: "bolder" }}>
          WelCome To Expense Tracker
        </h1>
        {!props.user.isPremiumuser ? (
          <h3>
            Get the premium account features{" "}
            <ActivatePremium loadAgain={props.setToken} />
          </h3>
        ) : (
          <p style={{ color: "red" }}>You are premium user now</p>
        )}
        {props.user.isPremiumuser && <LeaderBoard />}

        {props.user.isPremiumuser && <DownloadTransaction />}
        <Button className="btn btn-md btn-danger" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </Fragment>
  );
};

export default UserProfile;

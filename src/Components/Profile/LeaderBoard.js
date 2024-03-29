import axios from "axios";
import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import LeaderBoardItem from "./LeaderBoardItem";

const path = process.env.REACT_APP_PATH;

const LeaderBoard = () => {
  const [showLeaderBoard, setShow] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const token = localStorage.getItem("expenseUser");
  const leaderBoardHandler = () => {
    axios
      .get(path + "premium/leaderBoard", {
        headers: { Authorization: token },
      })
      .then((result) => {
        // console.log(result.data);
        setLeaderBoard(result.data);
        setShow(true);
      })
      .catch((err) => console.log(err));
  };

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Button className="btn btn-success" onClick={leaderBoardHandler}>
        Show LeaderBoard
      </Button>
      {showLeaderBoard && (
        <LeaderBoardItem
          key={leaderBoard.name}
          data={leaderBoard}
          close={closeHandler}
        />
      )}
    </Fragment>
  );
};

export default LeaderBoard;

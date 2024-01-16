import axios from "axios";
import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

const DownloadTransaction = () => {
  const [link, setLink] = useState("");
  const token = localStorage.getItem("expenseUser");
  const downloadTransactionHandler = () => {
    console.log("Dowloading....");
    axios
      .get("http://localhost:3030/home/download-expense", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setLink(res.data.fileurl);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      {!link && (
        <Button
          className="btn btn-md btn-warning my-2 mx-2"
          onClick={downloadTransactionHandler}
        >
          <h3>Generate Transactions</h3>
        </Button>
      )}
      {link && (
        <Button className="btn btn-md btn-warning my-2 mx-2">
          <a href={link}>Download</a>
        </Button>
      )}
    </Fragment>
  );
};

export default DownloadTransaction;

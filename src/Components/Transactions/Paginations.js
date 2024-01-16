import { Fragment, useState } from "react";
import { Pagination } from "react-bootstrap";

const Paginations = (props) => {
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= props.pages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Fragment>
      <div align="center" style={{ justifyContent: "center" }}>
        <Pagination
          size="lg"
          style={{ justifyContent: "center" }}
          onClick={(e) => {
            e.preventDefault();
            setActive(e.target.textContent);
            props.pageClicked(e.target.textContent);
          }}
        >
          {items}
        </Pagination>
      </div>
    </Fragment>
  );
};

export default Paginations;

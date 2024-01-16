import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CategoryDesign = () => {
  return (
    <Container>
      <div align="center" className="mb-3">
        <h1 className="display-6" style={{ fontWeight: "bold" }}>
          Choose Categories
        </h1>
      </div>
      <div align="center">
        <Row>
          <Col md={1}></Col>
          <Col xs={4} sm={3} md={2}>
            <div align="center">
              <Link to="/transactions/Salary">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11022/11022483.png"
                  roundedCircle
                  style={{ maxWidth: "80%", border: "2px solid cyan" }}
                />
              </Link>
              <p>Salary</p>
            </div>
          </Col>

          <Col xs={4} sm={3} md={2}>
            <div align="center">
              <Link to="/transactions/Grocery">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11015/11015452.png"
                  roundedCircle
                  style={{ maxWidth: "80%", border: "2px solid cyan" }}
                />
              </Link>
              <p>Grocery</p>
            </div>
          </Col>

          <Col xs={4} sm={3} md={2}>
            <div align="center">
              <Link to="/transactions/Food">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11028/11028116.png"
                  roundedCircle
                  style={{ maxWidth: "80%", border: "2px solid cyan" }}
                />
              </Link>
              <p>Food</p>
            </div>
          </Col>

          <Col xs={4} sm={3} md={2}>
            <div align="center">
              <Link to="/transactions/Shopping">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/11137/11137825.png"
                  roundedCircle
                  style={{ maxWidth: "80%", border: "2px solid cyan" }}
                />
              </Link>
              <p>Shopping</p>
            </div>
          </Col>

          <Col xs={4} sm={3} md={2}>
            <div align="center">
              <Link to="/transactions/Fuel">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/9747/9747066.png"
                  roundedCircle
                  style={{ maxWidth: "80%", border: "2px solid cyan" }}
                />
              </Link>
              <p>Fuel</p>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default CategoryDesign;

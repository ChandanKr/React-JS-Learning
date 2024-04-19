import { Card, Col, Container, Button, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/Header";
import { postsData } from "./Data/postsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  let infoObj = {
    name: "Chandan Kumar",
    email: "chandan.kumar@gmail.com",
    phone: "7870465866",
    address: "Tenughat, Bokaro, Jharkhand",
  };
  return (
    <>
      <Header headerInfo={infoObj} call="yes">
        <h1>This is Children Prop 1</h1>
        <h1>This is Children Prop 2</h1>
      </Header>
      <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-4">
              <h1>About Me</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" className="text-center">
              {/* <Card className="container" style={{ width: "18rem" }}>
                <Card.Img
                  className="py-3"
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/86518920?v=4"
                />
                <Card.Body>
                  <Card.Title>Chandan Kumar</Card.Title>
                  <Card.Text>
                    2.2 years+ experienced software developer, degree in
                    computer science and engineering with a track record of
                    developing, designing, testing and monitoring software.
                    Proficient in interacting with the key client, understanding
                    their requirements to complete the project within a
                    particular time period and budget and ensuring optimum
                    client satisfaction.
                  </Card.Text>
                  <Button variant="primary">View LinkedIn Profile</Button>
                </Card.Body>
              </Card> */}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <FontAwesomeIcon icon={faWhatsapp} className="text-success col-lg-3" />
        <FontAwesomeIcon icon={faPhone} className="text-danger" />
        <FontAwesomeIcon icon={faCartShopping} className="text-danger" />
        <Row>
          {postsData.map((value, index) => {
            return <ProductItems pItems={value} key={index} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;

let ProductItems = ({ pItems }) => {
  return (
    <div className="col-lg-3 mb-4">
      <Card className="container">
        <Card.Body>
          <Card.Title style={{ textTransform: "capitalize" }}>
            {pItems.name}
          </Card.Title>
          <Card.Text>{pItems.body}</Card.Text>
          <Button variant="primary">View LinkedIn Profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

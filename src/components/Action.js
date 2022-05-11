import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import avengersImage from '../assets/img/ACTION/AVENGERS.jpg';
import eternalImage from '../assets/img/ACTION/ETERNAL.jpg';
import morbiusImage from '../assets/img/ACTION/MOERBIUS.jpg';
import shangchiImage from '../assets/img/ACTION/SHANG CHI.jpg';
import strangeImage from '../assets/img/ACTION/STARNGE.jpg';
import unchartedImage from '../assets/img/ACTION/UNCHARTED.jpg';

const Action = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="action">
          ACTION MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengersImage} alt="Batman Movies" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGERS INFINITY WAR (2018)</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={eternalImage} alt="Batman Movies" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ETERNAL (2021)</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Batman Movies" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS (2022)</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={shangchiImage} alt="Batman Movies" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SHANG-CHI (2021)</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={strangeImage} alt="Batman Movies" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOCTOR STRANGE (2016)</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={unchartedImage} alt="Batman Movies" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">UNCHARTED (2022)</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Action;

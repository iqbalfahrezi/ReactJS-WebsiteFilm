import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import batmanImage from '../assets/img/TRENDING/BATMAN.jpg';
import adamImage from '../assets/img/TRENDING/ADAM.jpg';
import flashImage from '../assets/img/TRENDING/FLASH.jpg';
import peakyImage from '../assets/img/TRENDING/PEAKY.jpg';
import spidermanImage from '../assets/img/TRENDING/SPIDERMAN.jpg';
import victorImage from '../assets/img/TRENDING/VICTOR.jpg';
import axios from 'axios';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="trending">
          TRENDING MOVIES
        </h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className="movieImage">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" />
                  <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">{result.title}</Card.Title>
                      <Card.Text className="text-left">{result.overview}</Card.Text>
                      <Card.Text className="text-left">{result.release_date}</Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css'

function Watchlist({ watchListData = [], removeMovie }) {
    console.log("watchListData:", watchListData); // Check if it's passed correctly
    
    return (
        <Container>
            <Row>
                {/* Conditionally render this message if the watchlist is empty */}
                {watchListData.length === 0 ? (
                    <h2 className="mt-3 text-center">No movies in your watchlist</h2>
                ) : null}

                {/* Map over the watchlist items and render a card for each movie */}
                {watchListData.map((movie) => (
                    <Col md={4} key={movie.id}>
                        <Card className="mt-3">
                            <Card.Img variant="top" src={movie.image_link} className="movie-image" />
                            <Card.Body>
                                <Card.Title>{movie.movie_name}</Card.Title>
                                <Card.Text>{movie.cbfc_certification}</Card.Text>
                                <Card.Text>{movie.genres.join(", ")}</Card.Text>

                                {/* Button to remove a movie from the watchlist */}
                                <Button variant="danger" onClick={() => removeMovie(movie.id)}>
                                    Remove from watchlist
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Watchlist;
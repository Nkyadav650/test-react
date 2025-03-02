import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../App.css'
function MovieCard({ movie, addToList, checkIsInWatchList }) {
  return (
    <Col md={4}>
      <Card className="mt-3">
        <Card.Img variant="top" src={movie.image_link} className="movie-image" />
        <Card.Body>
          <Card.Title>{movie.movie_name}</Card.Title>
          <Card.Text>{movie.cbfc_certification}</Card.Text>
          <Card.Text>{movie.genres?.join(", ")}</Card.Text>

          {/* Conditionally render text if the movie is in the watchlist */}
          {checkIsInWatchList(movie.id) && (
            <Card.Text className="watchlist-text">Added to watchlist</Card.Text>
          )}

          {/* Conditionally render the "Add to Watchlist" button if the movie is not in the watchlist */}
          {!checkIsInWatchList(movie.id) && (
            <Button variant="primary" onClick={() => addToList(movie)}>
              Add to watchlist
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;

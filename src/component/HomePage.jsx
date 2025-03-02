import React from 'react';
import { Container, Row, ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import MovieCard from './MovieCard';

function HomePage({ homeData = [], filterMovies, addToList, checkIsInWatchList, isWatchFill, setIsWatchFill }) {
    return (
        <>
            <ToastContainer position="top-center">
                <Toast bg="danger" show={isWatchFill} onClose={() => setIsWatchFill(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Cine Tracker</strong>
                    </Toast.Header>
                    <Toast.Body>You can't add more than 4 movies to your watchlist</Toast.Body>
                </Toast>
            </ToastContainer>
            <Container>
                <div className="custom-width">
                    <Form.Select className="mt-3 col-sm-4" onChange={(e) => filterMovies(e.target.value)}>
                        <option value="all">All</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Comedy">Comedy</option>
                    </Form.Select>
                </div>
                <Row className="d-flex">
                    {homeData?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            addToList={addToList}
                            checkIsInWatchList={checkIsInWatchList}
                        />
                    ))}
                </Row>

            </Container>
        </>
    );
}

export default HomePage;

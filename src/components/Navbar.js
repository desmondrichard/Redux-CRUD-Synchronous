import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function Navbar() {
    const {tasksList}=useSelector((state)=>state.tasks)
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs md="10 text-center text-primary fw-bold fs-4">
                        Project Management
                    </Col>
                    <Col md="10 text-center fs-5">{`Currently ${tasksList.length} tasks pending`}</Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
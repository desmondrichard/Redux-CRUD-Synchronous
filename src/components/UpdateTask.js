import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("")
    const UpdateTask=()=>{
        props.onHide(); //to make it close on cliking UpdateTask btn
    }

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title1">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="title" placeholder="enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description1">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control type="desc" placeholder="enter task description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                
                    <div className="text-end">
                        <Button variant="primary" size="lg" onClick={(e) => UpdateTask(e)}>
                            Update Task
                        </Button>
                    </div>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyVerticallyCenteredModal
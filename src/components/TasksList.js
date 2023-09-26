import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './UpdateTask';



function TasksList() {
    function updateTask() {
        console.log("Update");
        setModalShow(true); //on clicking update btn modal will open so made true and this line will make setModalShow from false to true
    }
    function deleteTask() {
        console.log("delete");
    }
    const [modalShow, setModalShow] = useState("");
    return (
        <div className="my-4">
            <Table striped bordered hover>
                <thead className='table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className="text-center"> <Button variant="primary" onClick={updateTask}><i className="bi bi-pencil-square"></i></Button> <Button onClick={deleteTask} variant="primary"><i className="bi bi-trash3-fill"></i></Button></td>
                    </tr>

                </tbody>
            </Table>
            {/* onclicking button inside table only it need to show modal tab so called MyVerticallyCenteredModal here: */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}  /*on clicking close btn modal will close */
            />


        </div>
    )
}

export default TasksList
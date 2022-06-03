import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add } from '../redux/Actions'

function AddTodo() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch()
  return (
    <div>
      <Form className='Form' onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" >
          <Form.Label style={{ marginRight: "20px" }}>New Task  ?  </Form.Label>
          <Form.Control
            style={{ width: "200px", marginRight: "20px", display: "inline-flex" }}
            type="text"
            onChange={e => setMessage(e.target.value)}
            required={true} placeholder="Add it here" />
          <Button variant="" onClick={() => {message ===""||message===" " ? alert("No task to add") : dispatch(add(message))}}> 
            <img src='./add.png' /></Button>
        </Form.Group>

      </Form>
    </div>
  )
}

export default AddTodo
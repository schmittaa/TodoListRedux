import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { done, edit, remove } from '../redux/Actions';

function Task({ todo }) {
    const [disabled, setDisabled] = useState(true);
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();


    return (

        <div>
            <Form className='Form'  >
                <Form.Group className="mb-3" >
                    <Form.Label style={{ width: '250px' }} >
                        <input
                            className="input"
                            style={{ textDecoration: todo.etat ? "line-through" : null }}
                            onChange={e => setText(e.target.value)}
                            disabled={disabled}
                            defaultValue={todo.text}/>
                    </Form.Label>
                    {show ? <Button variant="" ClassName="done" 
                        onClick={() => { setDisabled(!disabled); setShow(!show); }} >
                        <img src='./Ok.png' onClick={()=>dispatch(edit(todo.id,text))} /></Button> 
                        : null }
                    <Button variant="" onClick={() => dispatch(done(todo.id))}><img src='./done.jpg' /></Button>

                    <Button variant="" onClick={() => {setDisabled(!disabled); setShow(!show)}}><img src='./edit.png' /></Button>

                    <Button variant="" onClick={() => dispatch(remove(todo.id))} ><img src='./remove.png' /></Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Task
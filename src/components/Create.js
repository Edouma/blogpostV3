import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Create = () => {

    const [data, setData]= useState({
        title: "",
        author: "",
        body: ""
    })
    
    const handleChange =(e)=>{
        const {name, value}= e.target;
        setData ((prev)=>{
            return {...prev, [name]: value}
        })
        
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/blogs', data)
            .then(res =>{
                alert('new blog added')
            })
            .catch(err => console.log(err.message));
    }

    return ( 
        <div>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" onChange={handleChange} placeholder="Enter the title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control name="author" type="text" onChange={handleChange} placeholder="Enter author's name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" onChange={handleChange} name="body" rows={3} />
                </Form.Group>

                <Button variant='primary' type="submit">save blog</Button>
            </Form>
        </div>
     );
}
 
export default Create;
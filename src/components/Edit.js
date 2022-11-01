import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import React,{useState} from'react';

import{useNavigate} from 'react-router-dom';
import DatePicker from 'react-date-picker';




function Edit(){
    const[name,setName]= useState("");
    const[cin,setCin]= useState("");
    const [value,onChange] = useState(new Date());
    let history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids =uuid();
        let uniqueId=ids.slice(0,8);

        let a = name;
        let b = cin;

        Employees.push({id:uniqueId,Name:a,Cin:b,Date:value});
        history("/");
       


    };
    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>

                
                </Form.Control>
            </Form.Group>
        
        <Form.Group className="mb-3" controlId="formCin">
                <Form.Control type="text" placeholder="Enter cin" required onChange={(e) => setCin(e.target.value)}>

                
                </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
        
        <DatePicker onChange={onChange} value={value} />

        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} style={{backgroundColor:"black",borderColor:"black"}} type="submit">Update</Button>
        </Form>
        
    </div>

}
export default Edit;


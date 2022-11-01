import React,{Fragment} from 'react';
import{Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import{Link,useNavigate} from 'react-router-dom';


function Home() {
let history =useNavigate();


const handleDelete=(id)=>{
    var index=Employees.map(function(e){return e.id}).indexOf(id);
    Employees.splice(index,1);
    history('/');
};
  return (

        <Fragment>
            <div>
  
                <Table striped bordered hover size="l">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                               Cin
                
                            </th>
                            <th>
                                Date

                             </th>
                            <th>
                                Action

                             </th>
                            

                        </tr>

                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length>0
                            ?Employees.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.Name}</td>
                                        <td>{item.Cin}</td>
                                        <td>{item.Date.toLocaleTimeString()}</td>
                                        <td>
                                            <Link to={"/edit"}>
                                            <Button style={{backgroundColor: "black" ,borderColor:"black"}}  >Edit</Button>
                                            &nbsp;
                                            </Link>
                                            <Button  style={{backgroundColor: "black" ,borderColor:"black"}} onClick={()=>handleDelete(item.id)} >Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"

                        }
            
                    </tbody>


                </Table>
                <br>
                </br>
                <Link className="d-grid-2" to="/create">
                <Button size="lg" style={{backgroundColor: "black" ,borderColor:"black"}}>Create</Button>
                </Link>

            </div>
        </Fragment>
   

  );
}
export default Home;




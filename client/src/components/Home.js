import {useEffect, useState} from 'react'
import {getAllUser,deleteUser} from './api/Index'

// const dummyData=[{
//    // _id: "6374b4f0a68ab1c3425edd2c",
// name: "Mansi Bansal",
// role: "full stack developer",
// designation: "System Engineer",
// project: "Walgreens",
// experience: "2.3 years",
// email: "mansibansal12345@gmail.com",
// salary: "8 lpa",
// phone: "9990839648",
// joiningDate: "24/08/2020",
// previousCompany: "Not Applicable"
// }]

const initialState=[{
    // _id: "6374b4f0a68ab1c3425edd2c",
 name: "",
 role: "",
 designation: "",
 project: "",
 experience: "",
 email: "",
 salary: "",
 phone: "",
 joiningDate: "",
 previousCompany: ""
 }]


export const Home=()=>{

const [data,setData]=useState(initialState);

const getAllUserData=async()=>{
  const data =await getAllUser();
   console.log(data);
   setData(data);
}

const deleteUserData=async(userId)=>{
    const data =await deleteUser(userId);
     console.log(data);
     getAllUserData();
  }


useEffect(()=>{
  getAllUserData();
  console.log("data");
},[]);

    return(
        <div>
            <h4>Please fill the below Employee Details</h4>
            Name = 
            <input type="text">
            </input>
            <br></br>
            <br></br>
            Role = 
            <input type= "text">
            </input>
            <br></br>
            <br></br>
            Designation = 
            <input type= "text">
            </input>
            <br></br>
            <br></br>
            Project = 
            <input type="text">
            </input>
            <br></br>
            <br></br>
            Experience = 
            <input type="text">
            </input>
            <br></br>
            <br></br>
            Email Id = 
            <input type="text">
            </input>
            <br></br>
            <br></br>
            Salary = 
            <input type = "text">
            </input>
            <br></br>
            <br></br>
            Phone No. = 
            <input type="text">
            </input>
            <br></br>
            <br></br>
            Joining Date = 
            <input type="text">
            </input>
            <br></br>
            <br></br>
            Previous Company = 
            <input type = "text">
            </input>
            <br></br>
            <br></br>
            <input type ="button" value="Submit">
            </input>
            <br></br>
            <br></br>
            <h4>Employee Data Records</h4>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Project</th>
                    <th>Experience</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Phone</th>
                    <th>Joining Date</th>
                    <th>Previous Company</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    { data && data.map((res,index)=>(
                        <tr key={index}>
   <td>{index+1}</td>                         
<td>{res.name}</td>
<td>{res.role}</td>
<td>{res.designation}</td>
<td>{res.project}</td>
<td>{res.experience}</td>
<td>{res.email}</td>
<td>{res.salary}</td>
<td>{res.phone}</td>
<td>{res.joiningDate}</td>
<td>{res.previousCompany}</td>
<td>
    <input type="button" value="Edit" ></input>
    <input type="button" value="Delete" onClick={()=>deleteUserData(res._id)}></input>
</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div>
            {dummyData.map((res)=>(
                <div>
            <div>{res.name}</div>
            <div>{res.role}</div>
            <div>{res.designation}</div>
            <div>{res.project}</div>
      <div>{res.experience}</div>


            </div> 
            )
            
            )}
            </div> */}
        </div>
    )
        }
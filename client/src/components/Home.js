import {useEffect, useState} from 'react'
import {getAllUser,deleteUser,newUser, updateUser} from './api/Index'

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

const initialState={
 userId: "",
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
 }


export const Home=()=>{

const [data,setData]=useState([initialState]);

const [newData,setNewData]=useState(initialState)

const onChangeHandler=(event)=>{
  setNewData({...newData,[event.target.name]:event.target.value})  
}

const submitData= async ()=>{
console.log(newData)

if(!newData.userId){
    await newUserData(newData);
}
else{
    await updateUser(newData)
}
getAllUserData();
setNewData(initialState)
}

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


  const newUserData=async(body)=>{
    const data =await newUser(body);
     console.log(data);
    //  getAllUserData();
  }

const updateUserData=(body)=>{
    console.log(body);
    setNewData({
        userId: body._id,
        name: body.name,
        role: body.role,
        designation: body.designation,
        project: body.project,
        experience: body.experience,
        email: body.email,
        salary: body.salary,
        phone: body.phone,
        joiningDate: body.joiningDate,
        previousCompany: body.previousCompany
        });
  //  updateUser(body);
}

useEffect(()=>{
  getAllUserData();
  console.log("data");
},[]);

    return(
        <div>
            <h4>Please fill the below Employee Details</h4>
            Name = 
            <input type="text" value={newData.name} onChange={onChangeHandler} name="name">
            </input>
            <br></br>
            <br></br>
            Role = 
            <input type="text" value={newData.role} onChange={onChangeHandler} name="role">
            </input>
            <br></br>
            <br></br>
            Designation = 
            <input type="text" value={newData.designation} onChange={onChangeHandler} name="designation">
            </input>
            <br></br>
            <br></br>
            Project = 
            <input type="text" value={newData.project} onChange={onChangeHandler} name="project">
            </input>
            <br></br>
            <br></br>
            Experience = 
            <input type="text" value={newData.experience} onChange={onChangeHandler} name="experience">
            </input>
            <br></br>
            <br></br>
            Email Id = 
            <input type="text" value={newData.email} onChange={onChangeHandler} name="email">
            </input>
            <br></br>
            <br></br>
            Salary = 
            <input type ="text" value={newData.salary} onChange={onChangeHandler} name="salary">
            </input>
            <br></br>
            <br></br>
            Phone No. = 
            <input type="text" value={newData.phone} onChange={onChangeHandler} name="phone">
            </input>
            <br></br>
            <br></br>
            Joining Date = 
            <input type="text" value={newData.joiningDate} onChange={onChangeHandler} name="joiningDate">
            </input>
            <br></br>
            <br></br>
            Previous Company = 
            <input type ="text" value={newData.previousCompany} onChange={onChangeHandler} name="previousCompany">
            </input>
            <br></br>
            <br></br>
            <input type ="button" value="Submit" onClick={()=>submitData()}>
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
    <input type="button" value="Edit" onClick={()=>updateUserData(res)}></input>
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

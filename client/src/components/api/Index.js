import axios from 'axios'
const baseURL = "http://localhost:4000/users"

export const getAllUser=async()=>{
    try{
  const {data}= await axios.get(`${baseURL}/getAll`)
  //console.log(data)
  return data;
    }
    catch(error){
        return <h1>Data not found</h1>
    }
}
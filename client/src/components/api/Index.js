import axios from "axios";
const baseURL = "http://localhost:4000/users";

export const getAllUser = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/getAll`);
    //console.log(data)
    return data;
  } catch (error) {
    return <h1>Data not found</h1>;
  }
};

export const deleteUser = async (userId) => {
  try {
    console.log(userId);
    const { data } = await axios.post(
      `${baseURL}/deleteUser`,
      { userId: userId },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return <h1>Data not found</h1>;
  }
};


  export const newUser = async (body) => {
    try {
      console.log(body);
      const { data } = await axios.post(
        `${baseURL}/newUser`,
        body,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      return <h1>Data not found</h1>;
    }


};

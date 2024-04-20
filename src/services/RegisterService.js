import axios from "axios";

const register = async (newUser) => {
    try {
      const response = await axios.get("http://localhost/puerto");
      setData(response.data);
      return user
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


export default register;

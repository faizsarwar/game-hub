import axios from "axios";

// rawg api key 7e7a82a5853a4a96b1cf4dd506037e03

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {key: "7e7a82a5853a4a96b1cf4dd506037e03"}
})
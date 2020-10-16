import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID QLJquTtNTLs9CPQS43cNqlU8B_7vDzHHag_oQUoFdf0"
  }
});

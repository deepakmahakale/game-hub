import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '31ae7b8a22454ffbbfa64642b7c1fdc6'
  }
})

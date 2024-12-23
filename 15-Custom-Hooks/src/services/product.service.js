import axios from "axios";

const getProducts = (callback) => {
  axios.get('https://fakestoreapi.com/products')
    .then((res) => {
    callback(res.data)
    })
    .catch((err) => {
   callback(err)
  })
}
export default getProducts
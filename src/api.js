import axios from 'axios'
let URL = "https://fakestoreapi.com"
// Get Home Page Products (Hot Deals)
export let getProducts = async () => {
    try {
        let response = await axios.get(`${URL}/products`);
        let data = await response.data;
        return data;
    }
    catch (err) { console.log(err) }
}
// Get Categories
export let getCategories= async () => {
    try {
        let response = await axios.get(`${URL}/products/categories`);
        let data = await response.data;
        return data;
    }
    catch (err) { console.log(err) }
}

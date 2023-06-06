import axios from 'axios';
const baseUrl="http://localhost:3002";

class ProductService{


    getProducts(){
        return axios.get(baseUrl+"/products")
    }

    getById(id){
        return axios.get(baseUrl+"/products/product/"+id)
    }

    updateProd(prod){
        return axios.put(baseUrl+"/products/product/"+prod.prodid,prod)
    }
    addProd(prod){
        
        return axios.post(baseUrl+"/products/product/"+prod.prodid,prod)
     }

    // deleteProd(id){
    //     return axios.delete(baseUrl+"/product/"+id)
    // }


}

export default new ProductService();
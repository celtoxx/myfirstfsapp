import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductService from "../service/ProductService";
const ProdForm=(props)=>{
    let navigate=useNavigate()

    let [formdetails,setformdetails]=useState({prodid:"",pname:"",pprice:""})

    let addprod=()=>{
        if(formdetails.prodid==="" || formdetails.pname==="" || formdetails.pprice==="" ){
            alert("fields cant be blank");
            return;

        }
        ProductService.addProd(formdetails).then((result)=>{console.log(result);
        setformdetails({prodid:"",pname:"",pprice:""});
        navigate("/table")    
        }).catch();
    }




    return(
        <div>
<form>
  <div className="form-group">
    <label htmlFor="prodid">Product id</label>
    <input
      type="text"
      className="form-control"
      id="prodid"
      name="prodid"
      value={formdetails.prodid}
      onChange={(event)=>{setformdetails({...formdetails,prodid:event.target.value})}}
    />
   
  </div>
  <div className="form-group">
  <label htmlFor="pname">Product Name</label>
    <input
      type="text"
      className="form-control"
      id="pname"
      name="pname"
      value={formdetails.pname}
      onChange={(event)=>{setformdetails({...formdetails,pname:event.target.value})}}
    />
   
  </div>
  <div className="form-group form-check">
  <label htmlFor="pprice">Product Price</label>
    <input
      type="text"
      className="form-control"
      id="pprice"
      name="pprice"
      value={formdetails.pprice}
      onChange={(event)=>{setformdetails({...formdetails,pprice:event.target.value})}}
    />
   
  </div>
  <button type="button" className="btn btn-primary"
  onClick={addprod}>Add product
  </button>
</form>

        </div>
    )


}
export default ProdForm;
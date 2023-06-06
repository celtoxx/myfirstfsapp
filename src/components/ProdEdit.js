import { useLocation,useParams,useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";
import { useEffect,useState } from "react";
const ProdEdit = (props) => {
  const params = useParams();

  let navigate = useNavigate();

  const location = useLocation();

  let [formdetails, setformdetails] = useState({
    prodid: "",
    pname: "",
    pprice: "",
  });

  useEffect(() => {
    ProductService.getById(params.prodid)
      .then((result) => {
        setformdetails({ ...result.data });
      })
      .catch();
  }, []);

  let updateProd = () => {
    console.log("in update prod");
    ProductService.updateProd(formdetails)
      .then(() => {
        navigate("/table");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("in product edit");
  console.log(location.state.prod);

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="prodid">Product id</label>
          <input
            type="text"
            className="form-control"
            id="prodid"
            value={formdetails.prodid}
            name="prodid" readOnly
            onChange={(event) => {
              setformdetails({ ...formdetails, prodid: event.target.value });
            }}
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
            onChange={(event) => {
              setformdetails({ ...formdetails, pname: event.target.value });
            }}
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
            onChange={(event) => {
              setformdetails({
                ...formdetails,
                ppricepprice: event.target.value,
              });
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={updateProd}>
          Update product
        </button>
      </form>
    </div>
  );
};

export default ProductService;
import ProductService from "./ProdEdit";
import React,{Component} from 'react';
import { Link } from "react-router-dom";
class ProdTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { parr: [], searcharr: [], searchtext: "" };
  }
  //it will render empty table first and then it will call componentdidmount
  componentDidMount() {
    console.log("in componentdidmount");
    ProductService.getProducts().then((result)=>{
        console.log(result);
        this.setState({...this.state,parr:result.data,searcharr:result.data})


    }).catch()


  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.searchtext!==this.state.searchtext){
        console.log("in didupdate textstatechange")
        if(this.state.searchtext!==""){
            let newarr=this.state.parr.filter(prod=>prod.pname.includes(this.state.searchtext))
            this.setState({...this.state,searcharr:[...newarr]})
        }
        else{
            this.setState({...this.state,searcharr:this.state.parr})
        }
    }


  }

  render() {
    return (
      <div>
        <>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Prodid</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.searcharr.map((prod) => {return (
                <tr key={prod.pid}>
                  <td>{prod.pid}</td>
                  <td>{prod.pname}</td>
                  <td>{prod.pprice}</td>
                  <td>
                    <button
                      type="button"
                      id="btn"
                      name="btn"
                      class="btn btn-danger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg></button> &nbsp;&nbsp;&nbsp;
                      <Link to={`edit/${prod.pid}`} state={{prod:prod}}>
                      <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                
                </svg></button>
                        

                      </Link>
                    
                  </td>
                </tr>);
              })}
            </tbody>
          
          </table>
        </>
      </div>
    );
  }
}

export default ProdTable;

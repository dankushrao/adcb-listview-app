import {
    MDBCol,
    MDBBtn,
    MDBBtnGroup
  } from "mdb-react-ui-kit";
  
export default function FilterBy({filterFunction}) {
    function handleFilter(val){
        filterFunction(val);
    }
    return (
        <MDBCol size="2">
            <MDBBtnGroup>
                <MDBBtn color='success' onClick={() => handleFilter("Active")}>Active</MDBBtn>
                <MDBBtn color='danger' style={{ marginLeft: "2px" , marginRight: "2px"}} onClick={() => handleFilter("Inactive")}>Inactive</MDBBtn>
            </MDBBtnGroup>
        </MDBCol>
    )
}
import {
    MDBCol,
    MDBBtn,
    MDBBtnGroup
} from "mdb-react-ui-kit";

export default function Language({ callUpdateDirection }) {
    function updateDirection(val) {
        callUpdateDirection(val);
    }
    return (
        <MDBCol size="4">
            <h5>Select Language :</h5>
            <MDBBtnGroup>
                <MDBBtn color='success' onClick={() => updateDirection("ltr")}>English</MDBBtn>
                <MDBBtn color='danger' style={{ marginLeft: "2px", marginRight: "2px" }} onClick={() => updateDirection("rtl")}>Arabic</MDBBtn>
            </MDBBtnGroup>
        </MDBCol>
    )
}
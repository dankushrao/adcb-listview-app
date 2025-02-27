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
        <MDBCol size="2">
            <MDBBtnGroup>
                <MDBBtn color='secondary' onClick={() => updateDirection("ltr")}>English</MDBBtn>
                <MDBBtn color='primary' style={{ marginLeft: "2px", marginRight: "2px" }} onClick={() => updateDirection("rtl")}>Arabic</MDBBtn>
            </MDBBtnGroup>
        </MDBCol>
    )
}
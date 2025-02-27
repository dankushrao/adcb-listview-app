import {
    MDBCol,
    MDBBtn,
    MDBBtnGroup
} from "mdb-react-ui-kit";

export default function Theme({ callUpdateTheme }) {
    function updatTheme(val) {
        callUpdateTheme(val);
    }
    return (
        <MDBCol size="4">
            <MDBBtnGroup>
                <MDBBtn color='light' onClick={() => updatTheme("Light")}>Light</MDBBtn>
                <MDBBtn color='dark' style={{ marginLeft: "2px", marginRight: "2px" }} onClick={() => updatTheme("Dark")}>Dark</MDBBtn>
            </MDBBtnGroup>
        </MDBCol>
    )
}
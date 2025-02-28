import {
    MDBCol,
    MDBBtn,
    MDBBtnGroup
} from "mdb-react-ui-kit";

export default function Theme({ callUpdateTheme,btnText}) {
    function updatTheme(val) {
        callUpdateTheme(btnTxtVal);
    }
    const btnTxtVal = btnText === "dark"? "light":"dark";
    return (
        <MDBCol size="4">
            <MDBBtnGroup>
                <MDBBtn color={btnTxtVal} onClick={() => updatTheme()}>{btnTxtVal}</MDBBtn>
            </MDBBtnGroup>
        </MDBCol>
    )
}
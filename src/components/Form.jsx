import {
    MDBCol,
    MDBBtn
} from "mdb-react-ui-kit";

export default function Form({ handleSearch, setValue, handleReset,value }) {

    function handleSearchTmp(e) {
        handleSearch(e);
    }

    function updateValue(val) {
        setValue(val)
    }

    function handleResetTmp(e) {
        handleReset();
    }

    return (
        <MDBCol size="4">
        <form
            style={{
                margin: "auto",
                maxWidth: "400px",
                alignContent: "flex-start"
            }}
            className="d-flex input-group w-auto"
            onSubmit={handleSearchTmp}
        >
            <input
                type="text"
                className='form-control'
                placeholder='search name..'
                value={value}
                onChange={(e) => updateValue(e.target.value)}
            />
            <MDBBtn type="submit" color='dark'>Search</MDBBtn>
            <MDBBtn className='mx-2' color="info" onClick={() => handleResetTmp()}>Reset</MDBBtn>
        </form>
        </MDBCol>
    )
}
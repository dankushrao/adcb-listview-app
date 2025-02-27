import {
    MDBCol
} from "mdb-react-ui-kit";

export default function SortBy({sortVal, sortFunction}) {
    const sortOptions = ["name", "email", "phone", "address", "status"];
    function updateSortValue(val){
        sortFunction(val);
    }
    return (
        <MDBCol size="4">
            <h5>Sort By:</h5>
            <select style={{ width: "50%", borderRadius: "2px", height: "35px" }}
                onChange={updateSortValue}
                value={sortVal}>
                <option value="" key="0">Select Select Value..</option>
                {sortOptions.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </MDBCol>
    )
}
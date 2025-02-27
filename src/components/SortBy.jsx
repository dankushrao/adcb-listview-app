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
            <select style={{ width: "80%", borderRadius: "2px", height: "35px" }}
                onChange={updateSortValue}
                value={sortVal}>
                <option value="" key="0">Sort By..</option>
                {sortOptions.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </MDBCol>
    )
}
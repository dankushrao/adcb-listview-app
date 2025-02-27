import {
    MDBTableBody
} from "mdb-react-ui-kit";

export default function TableRows({ rowItem, rowIndex,theme }) {
    return (

        <MDBTableBody key={rowIndex}>
            <tr style={{ backgroundColor: rowIndex % 2 === 0 ? (theme ==="Dark" ? "#00FFFF":"#7FFFD4") 
                : ( theme ==="Dark" ? "#808080":"#C0C0C0")}}>
                <th scope='row'>{rowIndex + 1}</th>
                <td>{rowItem.name}</td>
                <td>{rowItem.email}</td>
                <td>{rowItem.phone}</td>
                <td>{rowItem.address}</td>
                <td>{rowItem.id}</td>
                <td>{rowItem.status}</td>
            </tr>
        </MDBTableBody>
    );
}
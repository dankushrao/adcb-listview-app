import {
    MDBTableBody
} from "mdb-react-ui-kit";

export default function TableRows({ rowItem, rowIndex }) {
    return (

        <MDBTableBody key={rowIndex}>
            <tr>
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
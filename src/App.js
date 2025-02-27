import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
  MDBTable,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBModalBody
} from "mdb-react-ui-kit";
import SortBy from './components/SortBy.jsx';
import FilterBy from './components/FilterBy.jsx';
import Form from './components/Form.jsx';
import TableHeader from './components/TableHeader.jsx';
import TableRows from './components/TableRows.jsx';
import Language from './components/Language.jsx';

function App() {
  const startVal = 0;
  const incrementBy = 6;
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const containerRef = useRef(null);
  const [start, setStart] = useState(startVal);
  const [end, setEnd] = useState(incrementBy);
  const [direction, setDirection] = useState("ltr");

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setStart(end);
      setEnd(end + incrementBy);
      loadUserData();
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  function updateDirection(val) {
    setDirection(val);
  }

  const loadUserData = async () => {
    return await axios
      .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
      .then((response) => {
        setData((prevUsers) => [...prevUsers, ...response.data]);
      })
      .catch((err) => console.log(err));
  }

  const handleReset = async (e) => {
    setStart(startVal);
    setEnd(incrementBy);
    setValue("");
    setSortValue("");
    setData([]);
    loadUserData();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const filterredData = [...data].filter(item =>
      item.name?.toString().toLowerCase().includes(value.toLowerCase())
    );
    setData(filterredData);
  };

  const updateSortValue = async (e) => {
    let key = e.target.value;
    setSortValue(key);
    const sortedData = [...data].sort((a, b) => a[key].localeCompare(b[key]));
    setData(sortedData);
  };

  const handleFilter = async (value) => {
    const filterredData = [...data].filter(item =>
      item.status?.toString().includes(value)
    );
    setData(filterredData);
  };

  return (
    <MDBContainer>
      <Form handleSearch={handleSearch} setValue={setValue} handleReset={handleReset} value={value}></Form>
      <MDBRow>
        <SortBy sortVal={sortValue} sortFunction={updateSortValue}></SortBy>
        <FilterBy filterFunction={handleFilter}></FilterBy>
        <Language callUpdateDirection={updateDirection}></Language>
      </MDBRow>
      <div style={{ marginTop: "10px" }}>
        <h2 className='text-center'>search, filter, sort and pagination using JSON fake rest API</h2>
        <MDBContainer className="scroll-container"
          ref={containerRef}
          onScroll={handleScroll}>
          <MDBRow>
            <MDBCol size="12px">
              <MDBTable>
                <TableHeader></TableHeader>
                {data.length === 0 ? (
                  <MDBModalBody className='align-center mb-0'>
                    <tr>
                      <td colSpan={8} className='text center mb-0'> No data Found!! </td>
                    </tr>
                  </MDBModalBody>
                ) : (
                  data.map((item, index) =>
                  (
                    <TableRows rowItem={item} rowIndex={index}></TableRows>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBContainer>
  )
}

export default App;

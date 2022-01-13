import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { parseSnapshot } from "../helpers";

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '#', width: 150 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 700,
    editable: true,
  },
];

const Search = (props) => {

  const { category } = useParams();

  let [movies, setMovies] = useState([])
  const {title, type, yearFrom, yearTo} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      db.collection("movies").get()
        .then(parseSnapshot(movies => {
          const filterData = movies.filter((item) => {
            return item.title.indexOf(title) >= 0 && item.type.indexOf(type) >= 0 && yearFrom <= item.subTitle.slice(0, 3) && item.subTitle.slice(0, 3) <= yearTo
          }
          );
          console.log(filterData);
          setMovies(filterData)
        }))
    }
    fetchData()

  }, [category])

  return (
    <div>
      <div className="px-3 pb-3 text-black pt-8 search-title">Search Result</div>
      <div className="d-flex">
        {movies.map(item => (
          <div className="px-3"><img className="border-3 shadow-search" src={item.cardImg} style={{width:"300px"}}/></div>
        ))}
        <div className="px-3" style={{height:400, width:"100%"}}>
        <DataGrid
          rows={movies}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          className="text-center"
        />
        </div>
      </div>
    </div>
  );
};


export default Search;

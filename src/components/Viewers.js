import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect, useRef } from 'react'
const Viewers = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState(""); 

  const Search = () => {
    let url = "/home/search/"+title+"/"+type+"/"+yearFrom+"/"+yearTo;
    history.push(url);
  }
  return (
    <Container>
      {/* <Wrap>
        <Link to={`/category/disney`}>
          <img src="/images/viewers-disney.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </Link>
      </Wrap> */}
      {/* <Wrap>
        <Link to={`/category/pixar`}>
          <img src="/images/viewers-pixar.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          </video>
          </Link>
      </Wrap> */}
      {/* <Wrap>
        <Link to={`/category/marvel`}>
          <img src="/images/viewers-marvel.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </Link>
      </Wrap> */}
      <Wrap>
        <Link to={`/category/star-wars`}>
          <img src="/images/viewers-starwars.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </Link>
      </Wrap>
      <div style={{width:"800px"}}>
        <TextField fullWidth label="Title" id="title" className="search-form"  value={title} onChange={e => setTitle(e.target.value)} />
        <TextField fullWidth label="Type" id="type" className="search-form mt-2" value={type} onChange={e => setType(e.target.value)} />
        <TextField fullWidth label="From [year]" id="yearFrom" className="search-form mt-2 w-50 mr-3" value={yearFrom} onChange={e => setYearFrom(e.target.value)} />
        <TextField fullWidth label="To [year]" id="yearTo" className="search-form mt-2 w-50 ml-3" value={yearTo} onChange={e => setYearTo(e.target.value)} />
        <Button onClick={Search} variant="contained" className="mt-3 py-3" fullWidth>Search</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;

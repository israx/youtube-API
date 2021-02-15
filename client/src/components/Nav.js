import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search"
//context
import {contextYoutube} from "../context/useContext"
//logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt} from "@fortawesome/free-solid-svg-icons";




export default function Nav() {
 const {on, setOn} = useContext(contextYoutube);

  return (
    <StyledNav>
      <h1>
        <Link to="/">
          <FontAwesomeIcon icon={faHeadphonesAlt}/>
        </Link>
      </h1>
      <Search/>
      <a href="#" className="extra-column" onClick={()=>setOn(!on)}>
        {on ? '3' : '4'}
      </a>
   
    </StyledNav>
  );
}


const StyledNav = styled.nav`
  --sidePadding: 3rem;
  height: 10vh;
  padding: .5rem var(--sidePadding);
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  background: var(--white);

  
  .extra-column{
      font-size: 1.2rem;
      padding: .4rem;
      display: none;
      color: var(--white);
      background: var(--red);
      border-radius: 50%;
      width:  30px;
      height: 30px;
      &:hover{}
      
    }

  a {
    text-decoration: none;
    transition: all 0.3s ease;
    color: var(--red);
    font-size: 2rem;
    /* &:hover {
      color: var(--red);
    } */
    
  }
  

@media screen and (min-width: 720px){
  --sidePadding: 5rem;
}

@media screen and (min-width: 1200px){
  --sidePadding: 10rem;
  .extra-column{
      display: flex;
      justify-content: center;
      align-items: center;
   
    }
}
`
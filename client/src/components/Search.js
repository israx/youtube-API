import React, {useContext} from 'react'
import styled from 'styled-components'
import {contextYoutube} from "../context/useContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {

    const {handleSearch, handleSubmit, search} = useContext(contextYoutube)
   
    

    return (
        <StyledForm onSubmit={handleSubmit}>

     
        <input 
        onChange={handleSearch}
        value={search}
        name="search"
        placeholder="Search"
        type="text"
        
        />
        
        <button onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
       
          
        </StyledForm>
    )
}




const StyledForm = styled.form`
flex-grow: 1;
height: 2.2rem;
display: flex; 
justify-content: flex-end;
input, button{
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  height: 100%;
}
input{
  width: 80%;
  max-width: 300px;
  padding: 0.3rem;
  

}

button{

  width: 2.2rem;
  background: #f8f8f8;
  
}

`
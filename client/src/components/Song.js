import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export default function Song({song}) {
    return (
        <StyledSong> 
           <ReactPlayer
           width = "100%"
           controls={true}
           light={true}
           className="thumbnail"
           
           url = {`https://www.youtube.com/watch?v=${song.id.videoId}`}/>
            
            <Description > 
              <h3>{song.snippet.title}</h3>
              <p>{song.snippet.description}</p>
            </Description>
            
        </StyledSong>
    )
}

const StyledSong = styled.div`
  
    --columns: 1;
    --gap: 1rem;
    display: grid;
    gap: var(--gap);
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-auto-rows: auto;
    div:nth-last-child(2){
        height: 180px !important;
    }
   
    
  @media screen and (min-width: 620px){
    --columns: 2;
  }

 
  @media screen and (min-width: 720px){
    --columns: 1;
  }

  @media screen and (min-width: 1200px){

    div:nth-last-child(2){
        height: 250px !important;
    }
  }
`

const Description = styled.div`

  h3{   
      font-size: 1.3rem;
      font-weight: 500;
  }

  p{
    margin-top: .5rem;
    line-height: 1.5;
    color: #606060;
    font-weight:300;
  }

`
import React, {useContext} from 'react'
import styled from 'styled-components';
import Song from '../components/Song';
import {contextYoutube} from "../context/useContext"

export default function Home() {
const {songs, on} = useContext(contextYoutube);
console.log(songs)

const list = songs.map(song=> <Song song={song}/>)



    return (
        <SongsContainer on ={on}>
            {list}
        </SongsContainer>
    )
}

const SongsContainer = styled.div`
--columns: 1;
--sidePadding: 3rem;
display: grid;
gap: 1.5rem;
grid-template-columns: repeat(var(--columns), 1fr);
padding-left: var(--sidePadding);
padding-right: var(--sidePadding);
padding-bottom: 3rem;

@media screen and (min-width: 720px){
    --columns: 2;
    --sidePadding: 5rem;

}

@media screen and (min-width: 1200px){
    --sidePadding: 10rem;
    --columns: ${({on})=> on ? 4 : 3};
}

`



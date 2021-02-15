import React, {useState, useEffect} from 'react'
import axios from 'axios'

const context = React.createContext();

 function UseContext({children}) {
    const [on, setOn] = useState(false);
    const [search, setSearch] = useState('');
    const [songs, setSongs] = useState([])
    
   
    function handleSearch(e){

      const { value} = e.target
      setSearch(value)
     }
   
     function handleSubmit(e){
       
       e.preventDefault()
       axios.get(`http://localhost:5000/videos?query=${search}`)
       .then(res=> setSongs(res.data))
       .catch((err) => console.log(err + "error"));
   
     }

     useEffect(()=>{
     
      axios
      .get("http://localhost:5000/videos")
      .then(res=> {
        console.log(res.data)
        setSongs(res.data)})
      .catch(err => console.log(err + "err"))


     },[])

 
     const values = {search, songs, handleSearch, handleSubmit, on, setOn}
    return (
        <context.Provider value={values}>
            {children}
        </context.Provider>
    )
}

export {context as contextYoutube, UseContext as ProviderYoutube}

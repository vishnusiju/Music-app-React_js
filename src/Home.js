import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


import Card from './Components/Card'
import Topbar from './Components/Topbar'
import Spinner from './Components/Spinner'

const Home = () => {
    const[data, setData] = useState([]);
    const[search, setSearch] = useState(null);
    
    useEffect(() =>{
        axios.get('https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json').then(
            res => {
                !search ? setData(res.data) : setData(res.data.filter(songs => songs.title===search))  //singer
            }
        )
    },[search])
    
    return (
        <div>
            <Topbar/>
            {data.length >=1 ?
            <center>
                <Card songs={data}/>
            </center>
            :
            <Spinner/>
            }
           {/* <Topbar/> 
           <Card/>
           <Spinner/> */}
           <h6 className="footer" style={{textAlign:"center"}}>Design and developed by <b>Vishnu Siju</b></h6>
        </div>
    )
}

export default Home
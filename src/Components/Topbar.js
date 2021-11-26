import React from 'react'
import { useState } from 'react';

export default function Topbar() {
    const[search, setSearch] = useState(null);
    const onSubmit = e =>{
        e.preventDefault();
        setSearch(search);
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between ">
                <a className="navbar-brand mx-5" style={{color:"red",fontSize:"29px"}}><b>Music</b></a>
                <form className="form-inline my-2 my-lg-0 d-flex flex-row mx-5" onSubmit={onSubmit}>
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search Songs" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit" value="Search">Search </button>
                </form>
            </nav>

            
        </div>
    )
}

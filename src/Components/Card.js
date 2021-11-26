import React from 'react'
import './Card.css'

const Card = ({songs}) => {
    return (
        <div>
            <div className="row">
                {songs.map(song =>{
                    return(
                        <div className="col-md-3" key={song.id}>
                            <div className="card">
                                <img src={song.img} className="card-img-top" alt={song.title}/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{song.title}</h6>
                                <audio controls src={song.song} style={{width:"100%"}}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card

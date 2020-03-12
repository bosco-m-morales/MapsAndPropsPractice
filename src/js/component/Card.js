import React, {useState} from "react"
import PropTypes from "prop-types"

//declare function

export function Card(props){

    return(
        <div className="card m-3"  style={{"width:300px"}}>
                <img className="card-img-top" src={props.imgUrl} alt="Card image cap"/>
            < div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.phone}</p>
                <a href={props.contact.me} class="btn btn-primary">Email me</a>
            </div>
        </div>
    );
}   

Card.PropTypes = {
    imgUrl: PropTypes.String,
    title: PropTypes.String,
    phone: PropTypes.String,
    contactme: PropTypes.String
}


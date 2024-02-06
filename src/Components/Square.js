import React from "react";
import "../styles.css";

export default function Square(props){
    return <button className="square" onClick={props.onSquareClick}><p className="grid-no">{props.id}</p> {props.value}</button>

}
import React, { Component,useState } from 'react';
import "../components/indracoin.css"
import coin1 from "../components/coin1.png"
import coin2 from "../components/coin2.png"
import coin3 from "../components/coin4 (1).png"

function Indracoin() {

    const [coins,setCoin] = useState([false,false,false]);

    function changeState(id){
        setCoin(prevState => prevState.map((item,idx)=>idx === id ? !item : item))
    }

    function handleClick(e){
        switch(e.target.id){
            case "bt1":changeState(0);
            break;
            case "bt2":changeState(1);
            break;
            case "bt3":changeState(2);
            break;
            default: break;
        }
    }

    return (
    <div className="coinContainer">
        {!coins[0] ? <button id="bt1" onClick={handleClick}>Show</button> :
         <div><img className="coin" src={coin1} alt="beautiful coin 1 indra" />
         <button id="bt1" onClick={handleClick}>back</button></div>}

         {!coins[1] ? <button id="bt2" onClick={handleClick}>Show</button>:
         <div><img className="coin1" src={coin3} alt="beautiful coin 1 indra" />
         <button id="bt2" onClick={handleClick}>back</button></div> }

         {!coins[2]?<button id="bt3" onClick={handleClick}>Show</button> :<div>
         <img className="coin" src={coin2} alt="beautiful coin 1 indra" />
         <button id="bt3" onClick={handleClick}>back</button></div>} 
    </div>);
}

export default Indracoin;
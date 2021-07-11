import React, {useState} from 'react'

const Searchbox = ({query, weather_data, onClick}) => {
    const [text, setText] = useState('');

    const on_key_press_enter = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(!text) return alert("Trebuie să introduceți numele unei zone!");
            else if(text.toLocaleLowerCase() === "bucuresti") query("bucharest");
            else query(text);
            setText('');
        }
    }
    return (
        <>
          <div className="container" style={(typeof weather_data.main != 'undefined') ? {display: 'none'} : {display: 'grid'}}>
            <div className="row">
                <input type="text" placeholder="Numele zonei" onKeyPress={on_key_press_enter} onChange={(e) => setText(e.target.value)}></input>
                <span className="searchInfo">ATENȚIE: Pot fi introduse zone doar de pe teritoriul României!</span>   
            </div>    
          </div>
          <div className="container" style={(typeof weather_data.main != 'undefined') ? {display: 'grid'} : {display: 'none'}}>
            <button className="anotherSearch" onClick={onClick}>Caută informații meteorologice despre altă zonă</button>
          </div>
        </>
    )
}

export default Searchbox

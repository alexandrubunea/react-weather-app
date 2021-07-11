import React, {useState} from 'react'

const Searchbox = ({query}) => {
    const [text, setText] = useState('');

    const on_key_press_enter = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(!text) return alert("Trebuie să introduceți numele unei zone!");
            query(text);
            setText('');
        }
    }
    return (
        <>
          <div className="container">
            <div className="row">
                <input type="text" placeholder="Numele zonei" onKeyPress={on_key_press_enter} onChange={(e) => setText(e.target.value)}></input>    
            </div>    
          </div>  
        </>
    )
}

export default Searchbox

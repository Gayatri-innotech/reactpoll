import { Axios } from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Polls = () => {
    const products = useSelector((state) => state.cart);
    const url =(`https://secure-refuge-14993.herokuapp.com/do_vote?id=577212fdd1bba33c17b5b64e&option_text=nodejs`);
    const [data, setData] = useState({
    name:"",
    data:"",
    iduser:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post(url,{
            name: data.name
        })
    }

    return (
        <div>
            <h3>Polls</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product._id} className="cartCard">
                        <p>{product['title']}</p>
                        <div className="btns">
                            <label for="age1">Option 1</label>
                            <input className='btn' type="radio" id="age1" name="age" value="30" /><br />

                            <label for="age1">Option 2</label>
                            <input className='btn1' type="radio" id="age2" name="age" value="60" /><br />

                            <label for="age1">Option 3</label>
                            <input className='btn2' type="radio" id="age3" name="age" value="100" /><br />
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Polls;
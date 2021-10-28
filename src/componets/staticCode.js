import React,{ useState, useRef } from 'react';
import { data as dat1 } from "../json/123Data.json"
import { data as dat2 } from "../json/321Data.json"
import {mean, median, standardDeviation, mode} from "../componets/functions";

function Static() {
    const [data, setData] = useState(["0"]);
    const [val, setVal] = useState('');
    const inputRef = useRef();
    
    const submitHandler = (e) => {
        e.preventDefault();
        setVal(inputRef.current.value);
        data.push(val);
  }
    console.log("value--->", val);
    console.log("data--->",data);
    return (
        <div className="static-app">
            <div className="static-app__body">
                <div className="static-app__body__mean">
                    MEAN
                    <p>{mean(data)}</p>
                </div>
                <div className="static-app__body__median">
                    MEDIAN
                    <p>{median(data)}</p>
                </div>
                <div className="static-app__body__SD">
                    SD
                    <p>{standardDeviation(data)}</p>
                </div>
                <div className="static-app__body__mode">
                    MODE
                    <p>{mode(data)}</p>
                </div>
            </div>
            <div className="group">
                <button className="button" onClick={() => setData(dat1)}>JSON1</button>
                <button className="button" onClick={() => setData(dat2)}>JSON2</button>
            </div>
                <form className="form" onSubmit={submitHandler}>
                <input ref={inputRef} />
                <button type="submit">Submit</button>
                </form>
        </div>
    )
}
export default Static;
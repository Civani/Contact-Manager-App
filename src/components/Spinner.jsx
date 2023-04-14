import React from "react";
import spinnerImg from '../assets/img/SpinnerNoBG.gif';

let Spinner = () => {
    return(
        <React.Fragment>
         <div>
            <img src={spinnerImg} alt="Load" className="d-block m-auto" style={{width:'430px',height:'130px'}}/>
         </div>
        </React.Fragment>
    )
};
export default Spinner;
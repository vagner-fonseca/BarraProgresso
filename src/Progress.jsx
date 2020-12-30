import React from 'react';
import PropTypes from 'prop-types';
import'./styles.css'



const ProgressBar = ({value, max, color, width}) => {

return (
<div>
    <progress value= {value} max={max} /> 
   
    <spam> {(value/max) *100 }%</spam>
</div>

  
    );

};

ProgressBar.propTypes = {
value: PropTypes.number.isRequired,
max: PropTypes.number,
};

ProgressBar.defaultProps = {
    max: 100
};


export default ProgressBar;

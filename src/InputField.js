import React from 'react';
const InputField = (props) => {
  const handleChange = e => props.setText(e.target.value);
  return (
    <>
    <textarea onChange={handleChange} defaultValue={props.text}></textarea>
    </>
  )
}

export default InputField;
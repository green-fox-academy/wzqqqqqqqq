import React from 'react';

export default function FunctionalButton(props) {

  const { title, buttonText } = props;
  function handleClick() {
    console.log('I\'ve been clicked');
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  )
}
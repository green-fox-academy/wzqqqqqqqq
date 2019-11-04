import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import FirstComponent from './first-component';
import SecondComponent from "./second-component";

// let element = <FirstComponent />;
// let element = <SecondComponent title="My nice title" />;
let element = <SecondComponent items={[ 'a', 'b', 'c','d']} />;

ReactDOM.render(element, document.getElementById('react-container'));
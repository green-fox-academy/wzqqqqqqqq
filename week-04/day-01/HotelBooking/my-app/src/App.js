import React from 'react';

// more readable if I separate importing components from the react must imports
import FunctionalButton from './components/functional-button';
import ClassButton from './components/class-button';
import TodoList from './components/list';

export default function App(props) {
  return (
    <React.Fragment>
      <FunctionalButton
        // passing multiple props to my component:
        title="I'm a functional component with a button"
        buttonText="click me!"
      />
      <ClassButton title="I'm a class component with a button" />
      <TodoList title="I'm a list component" />
    </React.Fragment>
  )
}
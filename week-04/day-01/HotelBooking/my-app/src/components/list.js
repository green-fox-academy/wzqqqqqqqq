import React from 'react';

// functional/stateless/dumb/presentational component, they are synonyms
export default function TodoList(props) {

  let myTodos = [
    {
      id: 1,
      name: 'buy milk',
      completed: false,
    },
    {
      id: 2,
      name: 'eat',
      completed: false,
    },
    {
      id: 3,
      name: 'write a react component',
      completed: true,
    }
  ]

  // unique identifier for the list items: KEYS
  // it should be a stable id of the element
  // fallback: can use index, but try to avoid it

  let todoElements = myTodos.map(element => {
    return (
      <li key={element.id}>
        {element.name}, {element.completed ? 'done' : 'undone'}
      </li>
    )
  })

  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      {todoElements}
    </React.Fragment>
  )

}
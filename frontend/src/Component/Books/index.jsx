import React from 'react'

const Books = ({ books }) => {
  return (
    <>
      <h3>heyy books here:</h3>
      {books.map((b) => (
        <div key={b.id}>
          <h5>
            {b.title}
          </h5>
          <p>{b.body}</p>
        </div>
      ))}
    </>
  )
}

export default Books
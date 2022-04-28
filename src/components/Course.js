import React from 'react'

const Header = ({name}) => {
  return <h2>{name}</h2>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(({name, exercises, id}) =>
        <Part key={id} name={name} exercises={exercises} />
      )}
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({parts}) => {
  const totalExercises = () => (
    parts.reduce((sum, {exercises}) => sum + exercises, 0)
  )

  return <p><strong>total of {totalExercises()} exercises</strong></p>
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
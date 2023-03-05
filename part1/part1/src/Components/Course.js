import React from 'react'

const Course = ({ course }) => {


  const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }

  const Part = (name) => {
    return (
      <p>{name.part} {name.exercises}</p>
    )
  }

  const Content = ({ name, exercises }) => {
    return <Part part={name} exercises={exercises} />


  }

  const Total = ({ exercises }) => {
    console.log(exercises)
    //Uses callback function with param 1 being sum and param 2 being obect in the array
    let total = exercises.reduce((Acc, currentVal) => {
      return Acc + currentVal.exercises;
    }, 0);

    return (
      // <p>Total of {total} exercises</p>
      <div></div>
    )
  }

  console.log(course)

  // return (
  //   course.map((mappedCourse, index) =>
  //     <div>
  //       <Header key={index} name={mappedCourse.name} />
  //     </div>

  //   )
  // )
  let total = 0;
  return (
    <div>
      {course.map((mappedCourse, index) => (
        <div key={index}>
          <Header key={index} name={mappedCourse.name} />
          <div>
            {mappedCourse.parts.map((element, i) => (
              <div>
                <Content name={element.name} exercises={element.exercises} />
                {/* <Total exercises={mappedCourse} /> */}
              </div>
            ))}
          </div>
        </div>
      ))}
      {console.log(total)}
    </div>
  )

}


export default Course
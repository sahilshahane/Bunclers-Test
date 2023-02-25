import * as React from 'react'

interface ISayHello {
  name: string
}

const SayHello = (props: ISayHello) => {
  return (
    <>
      <h1>Hello {props.name}!</h1>
    </>
  )
}

export default SayHello

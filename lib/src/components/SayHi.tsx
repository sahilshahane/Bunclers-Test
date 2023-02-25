import * as React from 'react'

interface ISayHi {
  name: string
}

const SayHi = (props: ISayHi) => {
  return (
    <>
      <h1>Hi {props.name}!</h1>
    </>
  )
}

export default SayHi

import React from 'react'
import './Loading.css'
interface Props {}

const Loading = (props: Props) => {
  return (
      <div className="loading_wrapper">
          <div className="loading_blur"></div>
    </div>
  )
}

export default Loading
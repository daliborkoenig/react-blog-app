import React from 'react'
import Trianglify from 'react-trianglify'

function Home(props) {
  console.log(props.posts);
  return (
    <>
          
    <div className="Home">

      {props.posts.length !== 0 ? <><h2>Welcome to the React Blog App</h2><h3>There are {props.posts.length} articles so far...</h3></> : <><h2>Welcome to the React Blog App</h2><h3>There are no articles so far...</h3></>}
      
      {props.posts.length !== 0 && props.posts.map(item=><h5>{item.title}</h5>)}
    </div>
    </>
  )
}

export default Home

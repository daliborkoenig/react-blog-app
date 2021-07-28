import React, { useState } from 'react'
import { Link , useParams} from 'react-router-dom'

import './Cards.scss'
function ViewPosts(props) {
  const [show, setShow] = useState(false)
  let params = useParams()

  const handleClick = (item,i) => {
    props.getArticle(item)
  }

  return (
    <>
      <div className="ViewPosts mt-5">
        {props.posts && props.posts.map((item,i) =>
          <article class="postcard">
          <img src={`https://picsum.photos/40${i}/400`} alt="randomImage" />
          <div class="text">
            <p class="date mb-2">{item.date}, {item.time} by: {item.username}</p>

            <h1 class="title"><a href="#">{item.title}</a></h1>
            <p>{item.summary}</p>
            <p class="item postcard__tagbox" id={i} onClick={()=>handleClick(item,i)}><Link to={`/view-posts/${item.title}`}>Show full article</Link></p>
          </div>
        </article>)}        
      </div>
    </>
  )
}

export default ViewPosts

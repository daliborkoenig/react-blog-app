import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


function BlogPost(props) {
  const history = useHistory();

  return (
    <div className="BlogPost">
      <img src={`https://picsum.photos/00/200`} alt="randomImage" />
      <h1>{props.article.title}</h1>
      <p>{props.article.content}</p>
      <p>Author: {props.article.username}</p>
      <Button onClick={()=>history.push("/view-posts")}>Back</Button>
    </div>
  )
}

export default BlogPost

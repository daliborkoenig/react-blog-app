import React , { useState } from 'react';
import { BrowserRouter , Route , Switch , Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Navi from './Components.js/Navi';
import Home from './Components.js/Home';
import CreatePost from './Components.js/CreatePost';
import ViewPosts from './Components.js/ViewPosts';
import BlogPost from './Components.js/BlogPost';
import Trianglify from 'react-trianglify'

function App() {
  const [posts, setPost] = useState([])
  const [article, setArticle] = useState()
  const getPost = (post) => {
    console.log(post);
    setPost(posts => [...posts, post]);
  }
  const getArticle = (item) => {
    console.log(item);
    setArticle(item);
  }
  return (
    <div className="App h-100 w-100">
      <Trianglify
        width={window.innerWidth}
        height={window.innerHeight}
        cellSize={50}
        output="svg"
      />
     <BrowserRouter>
        <Navi/>
        <Switch>
          <Route exact path="/home"><Home posts={posts}/></Route>
          <Route exact path="/create-post"><CreatePost getPost={getPost}/></Route>
          <Route exact path="/view-posts"><ViewPosts getArticle={getArticle} posts={posts} article={article}/></Route>
          <Route exact path="/view-posts/:postName"><BlogPost article={article}/></Route>
          <Route render={() => <Redirect to={{pathname: "/home"}} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

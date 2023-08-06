import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetail } from './' ; //"./" means ./index

function App() {
  return (
    <div className="container">
      <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/create-post' element={<CreatePost />} />
          <Route  path='/post/:postId' element={<PostDetail />} />

        </Routes>
    </div>
  );
}

export default App;


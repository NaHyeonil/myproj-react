import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import PageBlog from 'pages/blog/PageBlog';
import Clock from 'pages/examples/Clock';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';
import ReviewList from 'pages/reviews/ReviewList';
import useWindowWidth from 'pages/examples/useWindowWidth';
import { Navigate, Route, Routes } from 'react-router-dom';
import CssModule from 'pages/examples/CssModule';
import './App.css';
import CssInJs from 'pages/examples/CssInJs';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
          <Route path="/blog/" element={<PageBlog />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
      </Routes>
      <hr />
      윈도우 가로크기 : {windowWidth}px
    </>
  );
}

export default App;

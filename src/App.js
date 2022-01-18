import './App.css';
import TopNav from 'components/TopNav';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import PageBlog from 'pages/blog/PageBlog';
import Clock from 'pages/examples/Clock';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';
import ReviewList from 'pages/reviews/ReviewList';
import useWindowWidth from 'pages/examples/useWindowWidth';
import { Navigate, Route, Routes } from 'react-router-dom';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';
import PageNewsArticleFrom from 'pages/news/PageNewsArticleFrom';
import PageHotdealIndex from 'pages/hotdeal/PageHotdealIndex';
import PageHotdealDetail from 'pages/hotdeal/PageHotdealDetail';
import PageHotdealFrom from 'pages/hotdeal/PageHotdealFrom';
import SignupForm from 'components/accounts/SignupForm';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<PageLogin />} />
          <Route path="/accounts/signup/" element={<SignupForm />} />
          <Route path="/accounts/profile/" element={<PageProfile />} />
          {/* <Route path="/blog/" element={<PageBlog />} /> */}
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new/" element={<PageNewsArticleFrom />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleFrom />}
          />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          {/* <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
          <Route path="/examples/context-api/" element={<ContextApiSample />} />
          <Route
            path="/examples/context-api-2/"
            element={<ContextApiSample2 />}
          /> */}
          <Route path="/hotdeal/" element={<PageHotdealIndex />} />
          <Route path="/hotdeal/:hotdealId/" element={<PageHotdealDetail />} />
          <Route path="/hotdeal/new/" element={<PageHotdealFrom />} />
          <Route
            path="/hotdeal/:hotdealId/edit/"
            element={<PageHotdealFrom />}
          />
          <Route path="/hotdeal/:hotdealId/" element={<PageHotdealDetail />} />
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

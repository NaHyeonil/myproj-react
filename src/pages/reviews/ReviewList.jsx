import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import Review from 'components/Review';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PageReviewList() {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoding(true);
    setError(null);

    const url = 'http://localhost:8000/shop/api/reviews/';
    Axios.get(url)
      .then(({ data }) => {
        setReviewList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoding(false);
      });
  };

  const deleteReview = (deletingReview) => {
    const { id: deletingReviewId } = deletingReview;
    const url = `http://localhost:8000/shop/api/reviews/${deletingReviewId}/`;

    setLoding(true);
    setError(null);

    Axios.delete(url)
      .then(() => {
        console.log('삭제 성공');
        //선택지 #1) 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) =>
          prevReviewList.filter((review) => review.id !== deletingReviewId),
        );
        //선택지 #2) 전체를 새로고침
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoding(false);
      });
  };

  return (
    <div>
      <h2>Review List</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신 중에 오류가 발생했습니다. </div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400 mr-1"
      >
        새로고침
      </button>

      <button
        onClick={() => navigate('/reviews/new/')}
        className="bg-blue-400 hover:bg-slate-400"
      >
        새 리뷰
      </button>

      <div>
        {reviewList.map((review) => (
          <Review
            key={review.id}
            review={review}
            handleDelete={() => deleteReview(review)}
          />
        ))}
      </div>

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;

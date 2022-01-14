import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

function HotdealDetail({ hotdealId }) {
  const navigate = useNavigate();

  const [{ data: hotdeal, loading, error }, refetch] = useApiAxios(
    `/hotdeal/api/hotdeals/${hotdealId}/`,
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteHotdeal] =
    useApiAxios(
      {
        url: `/hotdeal/api/hotdeals/${hotdealId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deleteHotdeal().then(() => {
        navigate('/hotdeal/');
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중 ...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}

      {hotdeal && (
        <>
          <h3 className="text-2xl my-5">
            [{hotdeal.mallname}] {hotdeal.title}
          </h3>
          {hotdeal.photo && (
            <img src={hotdeal.photo} alt={hotdeal.title} className="rounded" />
          )}
          <h4>{hotdeal.link}</h4>

          <div>
            {hotdeal.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/hotdeal/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/hotdeal/${hotdealId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default HotdealDetail;

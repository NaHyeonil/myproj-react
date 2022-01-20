import { useApiAxios } from 'api/base';
import { useEffect } from 'react';
import HotdealSummary from './HotdealSummary';

function HotdealList() {
  const [{ data: hotdealList, loading, error }, refetch] = useApiAxios(
    '/hotdeal/api/hotdeals/',
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="my-5 ">
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {hotdealList && (
        <div>
          {hotdealList.map((hotdeal) => (
            <div key={hotdeal.id}>
              <HotdealSummary hotdeal={hotdeal} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HotdealList;

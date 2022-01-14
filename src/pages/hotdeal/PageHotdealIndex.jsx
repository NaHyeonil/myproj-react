import Button from 'components/Button';
import HotdealList from 'components/hotdeal/HotdealList';
import { useNavigate } from 'react-router-dom';

function PageHotdealIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>핫딜</h2>
      <HotdealList />

      <Button onClick={() => navigate('/hotdeal/new/')}>새 글 쓰기</Button>
      <h2>광고</h2>
    </div>
  );
}

export default PageHotdealIndex;

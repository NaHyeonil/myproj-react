import HotdealDetail from 'components/hotdeal/HotdealDetail';
import { useParams } from 'react-router-dom';

function PageHotdealDetail() {
  const { hotdealId } = useParams();

  return (
    <div>
      <h2>핫딜</h2>
      <HotdealDetail hotdealId={hotdealId} />
    </div>
  );
}

export default PageHotdealDetail;

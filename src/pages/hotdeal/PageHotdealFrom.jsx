import HotdealForm from 'components/hotdeal/HotdealForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageHotdealFrom() {
  const navigate = useNavigate();

  const { hotdealId } = useParams();

  return (
    <HotdealForm
      hotdealId={hotdealId}
      handledDidSave={(savedPost) => navigate(`/hotdeal/${savedPost.id}/`)}
    />
  );
}

export default PageHotdealFrom;

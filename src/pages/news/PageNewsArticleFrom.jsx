import ArticleForm from 'components/news/ArticleForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageNewsArticleFrom() {
  const navigate = useNavigate();

  const { articleId } = useParams();

  return (
    <ArticleForm
      articleId={articleId}
      handledDidSave={(savedPost) => navigate(`/news/${savedPost.id}/`)}
    />
  );
}

export default PageNewsArticleFrom;

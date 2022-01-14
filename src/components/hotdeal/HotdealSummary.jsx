import { Link } from 'react-router-dom';

function HotdealSummary({ hotdeal }) {
  return (
    <div>
      {hotdeal.photo && (
        <img
          src={hotdeal.photo}
          alt={hotdeal.title}
          className="w-5 h-5 rounded inline"
        />
      )}
      <Link to={`/hotdeal/${hotdeal.id}/`}>
        [{hotdeal.mallname}] {hotdeal.title} - {hotdeal.price}
      </Link>
    </div>
  );
}

export default HotdealSummary;

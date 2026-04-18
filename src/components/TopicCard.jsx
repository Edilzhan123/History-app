import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <div className="topicCard">
      <Link className="mainLinks" to={`/topic/${topic.id}`}>
        <h2 className="mainTopics">{topic.title}</h2>
      </Link>
    </div>
  );
}

export default TopicCard;

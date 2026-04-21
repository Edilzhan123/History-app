import { useParams } from "react-router-dom";
import { periods } from "../components/data";
import { Link } from "react-router-dom";

function Topic() {
  const { periodId } = useParams();

  const period = periods.find((p) => p.id === Number(periodId));

  if (!period) return <h1>Не найдено</h1>;

  return (
    <div>
      <h1 className="topicTitle">{period.title}</h1>
      <div className="greed">
        {period.topics.map((t) => (
          <div key={t.id} className="innerTopic">
            <Link className="topicLink" to={`/topic/${periodId}/${t.id}`}>
              <p className="topicTitles">{t.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Topic;

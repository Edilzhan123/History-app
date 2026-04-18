import { useParams } from "react-router-dom";
import { periods } from "../components/data";
import { Link } from "react-router-dom";

function Topic() {
  const { periodId } = useParams();

  const period = periods.find((p) => p.id === Number(periodId));

  if (!period) return <h1>Не найдено</h1>;

  return (
    <div>
      <h1>{period.title}</h1>
      <div className="greed">
        {period.topics.map((t) => (
          <div key={t.id} class="innerTopic">
            <Link class="topicLink" to={`/topic/${periodId}/${t.id}`}>
              <p class="topicTitles">{t.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Topic;

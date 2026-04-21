import { useParams } from "react-router-dom";
import { periods } from "../components/data";

function TopicDetail() {
  const { periodId, topicId } = useParams();

  const period = periods.find((p) => p.id === Number(periodId));
  const topic = period?.topics.find((t) => t.id === Number(topicId));
  if (!topic) return <h1>Тема не найдена</h1>;

  return (
    <div className="topicPage">
      <p className="cardTitle">{topic.title}</p>
      <div className="table">
        {topic.content &&
          topic.content.map((block, index) => (
            <div key={index} className="row">
              <div className="left">{block.left}</div>

              <div className="right">
                {block.right.map((item, i) => (
                  <div
                    key={i}
                    className="rightItem"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="baseBook">
        {topic.pdfBase && (
          <a
            className="linkToBase"
            href={topic.pdfBase}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://store-images.s-microsoft.com/image/apps.45573.13510798886655750.7655cc79-0d25-41ea-b75f-b64c7120201f.cf626021-9fc0-4803-8c89-151943ba155b"
              alt=""
            />
            <p>БАЗА</p>
          </a>
        )}

        {topic.pdfBook && (
          <a
            className="linkToBook"
            href={topic.pdfBook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://store-images.s-microsoft.com/image/apps.45573.13510798886655750.7655cc79-0d25-41ea-b75f-b64c7120201f.cf626021-9fc0-4803-8c89-151943ba155b"
              alt=""
            />
            <p>КІТАП</p>
          </a>
        )}
      </div>
    </div>
  );
}

export default TopicDetail;

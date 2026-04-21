import TopicCard from "../components/TopicCard";
import { periods } from "../components/data";

function Home() {
  const topics = [
    { id: 1, class: "ancPeriod", title: "Ежелгі кезең" },
    { id: 2, class: "medieval", title: "Орта ғасыр" },
    { id: 3, class: "modern", title: "Жаңа заман" },
    { id: 4, class: "contemporary_1", title: "XX ғасыр I жартысы" },
    { id: 5, class: "contemporary_2", title: "XX ғасыр II жартысы" },
    { id: 6, class: "books", title: "Кітаптар / База" },
  ];

  return (
    <div className="mainPage">
      <h1 className="pageTitle">Тарих</h1>
      {periods.map((period) => (
        <TopicCard key={period.id} topic={period} />
      ))}
    </div>
  );
}

export default Home;

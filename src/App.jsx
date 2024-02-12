import Article from "./components/Article.jsx";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import News from "./data.js";

function App() {
  return (
    <>
      <Header />
      <Tabs className="px-2 max-w-xl mx-auto" />
      <section className="px-2 max-w-xl mx-auto">
        <h2 className="font-news text-xl text-amber-900 p-1 mb-2 border-b border-amber-900 border-opacity-10">
          Trending in Tech
        </h2>
        <ul>
          {News.map((item) => {
            return <Article key={item.id} article={item} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default App;

import Article from "./components/Article.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Tabs from "./components/Tabs.jsx";
import News from "./data.js";

function App() {
  return (
    <>
      <Header />
      <Tabs className="px-2 max-w-xl mx-auto mb-2" />
      <Section heading="Trending in Tech">
        <ul>
          {News.map((item) => {
            return <Article key={item.id} article={item} />;
          })}
        </ul>
      </Section>
    </>
  );
}

export default App;

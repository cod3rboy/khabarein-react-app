import { useState } from "react";
import Article from "./components/Article.jsx";
import Section from "./components/Section.jsx";
import Menu from "./components/Menu.jsx";
import {
  BookmarkIcon,
  NewspaperIcon,
  BookmarkSlashIcon,
} from "@heroicons/react/24/solid";
import News from "./data.js";

const MenuTabs = [
  {
    title: "What's happening?",
    icon: NewspaperIcon,
  },
  {
    title: "Saved",
    icon: BookmarkIcon,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(MenuTabs[0].title);

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  return (
    <>
      <Menu tabs={MenuTabs} activeTab={activeTab} onTabClick={handleTabClick} />
      {activeTab === MenuTabs[0].title && (
        <Section heading="Trending in Tech">
          <ul>
            {News.map((item) => {
              return <Article key={item.id} article={item} />;
            })}
          </ul>
        </Section>
      )}
      {activeTab === MenuTabs[1].title && (
        <Section heading="Saved Articles">
          <p className="flex gap-1 items-center text-slate-400">
            <BookmarkSlashIcon className="w-8 h-8" />
            There are no saved articles
          </p>
        </Section>
      )}
    </>
  );
}

export default App;

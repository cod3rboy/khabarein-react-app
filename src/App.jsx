import { useState } from "react";
import Menu from "./components/Menu.jsx";
import FrontArticles from "./components/FrontArticles.jsx";
import SavedArticles from "./components/SavedArticles.jsx";
import NewsProvider from "./store/news-context.jsx";
import { BookmarkIcon, NewspaperIcon } from "@heroicons/react/24/solid";

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
const lastActiveTab = localStorage.getItem("activeTab") ?? MenuTabs[0].title;

function App() {
  const [activeTab, setActiveTab] = useState(lastActiveTab);

  function handleTabClick(tabName) {
    setActiveTab(tabName);
    localStorage.setItem("activeTab", tabName);
  }

  return (
    <NewsProvider>
      <Menu tabs={MenuTabs} activeTab={activeTab} onTabClick={handleTabClick} />
      {activeTab === MenuTabs[0].title && <FrontArticles />}
      {activeTab === MenuTabs[1].title && <SavedArticles />}
    </NewsProvider>
  );
}

export default App;

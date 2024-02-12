import Header from "./Header.jsx";
import Tab from "./Tab.jsx";

export default function Menu({ tabs, activeTab, onTabClick }) {
  function handleTabClick(tabName) {
    if (onTabClick) onTabClick(tabName);
  }

  return (
    <section>
      <Header />
      <Tab.Container className="px-2 max-w-xl mx-auto mb-2">
        {tabs.map(({ title, icon }) => (
          <Tab.Item
            key={title}
            title={title}
            icon={icon}
            active={title === activeTab}
            onClick={() => handleTabClick(title)}
          />
        ))}
      </Tab.Container>
    </section>
  );
}

import { useContext, useState } from "react";
import Section from "./Section.jsx";
import { NewsContext } from "../store/news-context.jsx";
import ArticleList from "./ArticleList.jsx";
import CategorySelect from "./CategorySelect.jsx";
import { toTitleCase } from "../utils.js";

const categories = [
  "all",
  "national",
  "business",
  "sports",
  "world",
  "politics",
  "technology",
  "startup",
  "entertainment",
  "science",
  "automobile",
];
const lastSelectedCategory = localStorage.getItem("category") ?? categories[0];

export default function FrontArticles() {
  const { articles } = useContext(NewsContext);
  const [category, setCategory] = useState(lastSelectedCategory);

  function handleCategoryChange(category) {
    setCategory(category);
    localStorage.setItem("category", category);
  }

  return (
    <>
      <Section>
        <CategorySelect
          options={categories}
          selected={category}
          onChange={handleCategoryChange}
        />
      </Section>
      <Section heading={"Trending in " + toTitleCase(category)}>
        <ArticleList
          articles={articles}
          emptyMessage="No articles are available at this time"
        />
      </Section>
    </>
  );
}

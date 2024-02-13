import { useContext } from "react";
import Section from "./Section.jsx";
import { NewsContext, NewsCategories } from "../store/news-context.jsx";
import ArticleList from "./ArticleList.jsx";
import CategorySelect from "./CategorySelect.jsx";
import { toTitleCase } from "../utils.js";

export default function FrontArticles() {
  const { articles, category, changeCategory } = useContext(NewsContext);

  return (
    <>
      <Section>
        <CategorySelect
          options={NewsCategories}
          selected={category}
          onChange={changeCategory}
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

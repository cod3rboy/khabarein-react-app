import { useContext } from "react";
import Section from "./Section.jsx";

import { NewsContext } from "../store/news-context.jsx";
import ArticleList from "./ArticleList.jsx";

export default function FrontArticles() {
  const { articles } = useContext(NewsContext);

  return (
    <Section heading="Trending in Tech">
      <ArticleList
        articles={articles}
        emptyMessage="No articles are available at this time"
      />
    </Section>
  );
}

import { useContext } from "react";
import Section from "./Section.jsx";

import { NewsContext } from "../store/news-context.jsx";
import ArticleList from "./ArticleList.jsx";
import { BookmarkSlashIcon } from "@heroicons/react/24/outline";

export default function SavedArticles() {
  const { savedArticles: articles } = useContext(NewsContext);

  return (
    <Section heading="Saved Articles">
      <ArticleList
        articles={articles}
        emptyMessage="There are no saved articles"
        emptyIcon={BookmarkSlashIcon}
      />
    </Section>
  );
}

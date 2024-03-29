import { useContext, useState } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleContent from "./ArticleContent.jsx";
import ArticleFooter from "./ArticleFooter.jsx";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import timesago from "timesago";
import { NewsContext } from "../store/news-context.jsx";

export default function Article({ article }) {
  const { saveArticle, unsaveArticle } = useContext(NewsContext);
  const [contentVisible, setContentVisible] = useState(false);
  const createdAt = timesago(
    moment(
      article.date + ", " + article.time,
      "dddd, DD MMMM, YYYY, hh:mm a"
    ).toDate()
  );
  function handleFooterAction() {
    setContentVisible((prevContentVisible) => !prevContentVisible);
  }

  function handleSaveToggle() {
    if (article.saved) {
      unsaveArticle(article.id);
    } else {
      saveArticle(article.id);
    }
  }

  return (
    <li className="mb-4 bg-white shadow rounded">
      <ArticleHeader
        coverImage={article.imageUrl}
        headline={article.title}
        isSaved={article.saved}
        onSaveToggle={handleSaveToggle}
      />

      {contentVisible && (
        <ArticleContent storyUrl={article.readMoreUrl}>
          {article.content}
        </ArticleContent>
      )}

      <ArticleFooter
        author={article.author}
        createdAt={createdAt}
        actionIcon={contentVisible ? ChevronUpIcon : ChevronDownIcon}
        onAction={handleFooterAction}
      />
    </li>
  );
}

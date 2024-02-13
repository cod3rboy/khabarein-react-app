import { createContext, useReducer } from "react";
import NewsArticles from "../data.js";

export const NewsContext = createContext({
  articles: [],
  savedArticles: [],
  saveArticle: () => {},
  unsaveArticle: () => {},
});

if (!localStorage.getItem("articles")) {
  localStorage.setItem("articles", JSON.stringify(NewsArticles));
}

const cachedArticles = JSON.parse(localStorage.getItem("articles"));

function newsReducer(state, action) {
  if (action.type === "SAVE_ARTICLE") {
    const articleId = action.payload.articleId;
    const articles = [];
    state.articles.forEach((article) => {
      article = { ...article };
      if (article.id === articleId) {
        article.saved = true;
      }
      articles.push(article);
    });
    localStorage.setItem("articles", JSON.stringify(articles));
    return { ...state, articles };
  }
  if (action.type === "UNSAVE_ARTICLE") {
    const articleId = action.payload.articleId;
    const articles = [];
    state.articles.forEach((article) => {
      article = { ...article };
      if (article.id === articleId) {
        delete article.saved;
      }
      articles.push(article);
    });
    localStorage.setItem("articles", JSON.stringify(articles));
    return { ...state, articles };
  }

  return state;
}

export default function NewsProvider({ children }) {
  const [news, newsDispatch] = useReducer(newsReducer, {
    articles: cachedArticles,
  });

  function handleSaveArticle(articleId) {
    newsDispatch({
      type: "SAVE_ARTICLE",
      payload: {
        articleId,
      },
    });
  }

  function handleUnsaveArticle(articleId) {
    newsDispatch({
      type: "UNSAVE_ARTICLE",
      payload: {
        articleId,
      },
    });
  }

  const value = {
    articles: news.articles,
    savedArticles: news.articles.filter(({ saved }) => !!saved),
    saveArticle: handleSaveArticle,
    unsaveArticle: handleUnsaveArticle,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

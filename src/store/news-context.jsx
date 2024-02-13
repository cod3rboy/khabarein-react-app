import { createContext, useReducer } from "react";
import NewsArticles from "../data.js";

export const NewsCategories = [
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

export const NewsContext = createContext({
  category: "",
  articles: [],
  savedArticles: [],
  saveArticle: () => {},
  unsaveArticle: () => {},
  changeCategory: () => {},
});

if (!localStorage.getItem("articles")) {
  localStorage.setItem("articles", JSON.stringify(NewsArticles));
}
if (!localStorage.getItem("saved")) {
  localStorage.setItem("saved", JSON.stringify([]));
}

const cachedArticles = JSON.parse(localStorage.getItem("articles"));
const savedArticleIds = JSON.parse(localStorage.getItem("saved"));
const lastSelectedCategory =
  localStorage.getItem("category") ?? NewsCategories[0];

function newsReducer(state, action) {
  if (action.type === "SAVE_ARTICLE") {
    const articleId = action.payload.articleId;
    const savedIds = [...state.saved];
    if (!savedIds.includes(articleId)) {
      savedIds.unshift(articleId);
    }
    localStorage.setItem("saved", JSON.stringify(savedIds));
    return { ...state, saved: savedIds };
  }
  if (action.type === "UNSAVE_ARTICLE") {
    const articleId = action.payload.articleId;
    const savedIds = [...state.saved];
    const articleIndex = savedIds.indexOf(articleId);
    if (articleIndex >= 0) {
      savedIds.splice(articleIndex, 1);
    }
    localStorage.setItem("saved", JSON.stringify(savedIds));
    return { ...state, saved: savedIds };
  }
  if (action.type === "CHANGE_CATEGORY") {
    const category = action.payload.category;
    localStorage.setItem("category", category);
    return { ...state, category };
  }

  return state;
}

export default function NewsProvider({ children }) {
  const [news, newsDispatch] = useReducer(newsReducer, {
    articles: cachedArticles,
    saved: savedArticleIds,
    category: lastSelectedCategory,
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

  function handleChangeCategory(category) {
    newsDispatch({
      type: "CHANGE_CATEGORY",
      payload: {
        category,
      },
    });
  }

  const category = news.category;
  const articles = news.articles[category].map((article) => ({
    ...article,
    saved: news.saved.includes(article.id),
  }));
  const savedArticles = Object.values(news.articles)
    .flat()
    .map((article) => ({
      ...article,
      saved: news.saved.includes(article.id),
    }))
    .filter(({ saved }) => saved);

  const value = {
    category,
    articles,
    savedArticles,
    saveArticle: handleSaveArticle,
    unsaveArticle: handleUnsaveArticle,
    changeCategory: handleChangeCategory,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

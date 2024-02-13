import Article from "./Article.jsx";

export default function ArticleList({
  articles,
  emptyMessage,
  emptyIcon: EmptyIcon,
}) {
  return articles.length > 0 ? (
    <ul>
      {articles.map((item) => {
        return <Article key={item.id} article={item} />;
      })}
    </ul>
  ) : (
    <p className="flex gap-1 items-center text-slate-400">
      {EmptyIcon && <EmptyIcon className="w-8 h-8" />}
      {emptyMessage}
    </p>
  );
}

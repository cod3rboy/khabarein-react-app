export default function ArticleContent({ children, storyUrl }) {
  return (
    <p className="p-2 font-news text-justify">
      {children}
      <br />
      <a
        className="block mt-2 text-blue-600 hover:text-blue-500"
        href={storyUrl}
        target="_blank"
      >
        Click here to read full story...
      </a>
    </p>
  );
}

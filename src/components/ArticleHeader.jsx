import { BookmarkIcon as SaveIconOutlined } from "@heroicons/react/24/outline";
import { BookmarkIcon as SaveIconSolid } from "@heroicons/react/24/solid";

export default function ArticleHeader({
  coverImage,
  headline,
  isSaved,
  onSaveToggle,
}) {
  return (
    <>
      <img
        className="h-48 w-full object-cover rounded-t lg:h-56"
        src={coverImage}
        alt={headline}
      />
      <div className="flex items-center justify-between border-b border-slate-200">
        <h3 className="p-2 font-news font-bold text-justify">{headline}</h3>
        <button
          className="p-2 border-l border-slate-300"
          title={isSaved ? "Remove from saved" : "Save for later"}
          onClick={onSaveToggle}
        >
          {isSaved ? (
            <SaveIconSolid className="w-6" />
          ) : (
            <SaveIconOutlined className="w-6" />
          )}
        </button>
      </div>
    </>
  );
}

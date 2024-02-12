import { useState } from "react";
import { BookmarkIcon as SaveIconOutlined } from "@heroicons/react/24/outline";
import { BookmarkIcon as SaveIconSolid } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import timesago from "timesago";

export default function Article({ article }) {
  const [showContent, setShowContent] = useState(false);
  const createdAt = timesago(
    moment(
      article.date + ", " + article.time,
      "dddd, DD MMMM, YYYY, hh:mm a"
    ).toDate()
  );
  function handleClick() {
    setShowContent((prevShowContent) => !prevShowContent);
  }
  return (
    <li className="mb-4 bg-white shadow rounded">
      <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-col">
        <img
          className="h-48 w-full sm:h-24 sm:w-24 object-cover rounded-t sm:rounded-none sm:p-1 lg:p-0 lg:w-full lg:h-56 lg:rounded-t"
          src={article.imageUrl}
          alt={article.title}
        />
        <div className="flex items-center justify-between">
          <h3 className="p-2 font-news font-bold text-justify">
            {article.title}
          </h3>
          <button
            className="p-2 border-l border-slate-300"
            title="Save for later"
          >
            {article.saved ? (
              <SaveIconSolid className="w-6" />
            ) : (
              <SaveIconOutlined className="w-6" />
            )}
          </button>
        </div>
      </div>

      {showContent && (
        <p className="p-2 font-news text-justify border-t border-slate-200">
          {article.content}
          <br />
          <a
            className="block mt-2 text-blue-600 hover:text-blue-500"
            href={article.readMoreUrl}
            target="_blank"
          >
            Click here to read full story...
          </a>
        </p>
      )}

      <div className="p-2 flex justify-between bg-slate-600 rounded-b">
        <ul className="text-sm text-gray-300 flex flex-col gap-1">
          <li className="flex items-center gap-1">
            <UserCircleIcon className="w-5 h-5" />
            <span>{article.author}</span>
          </li>
          <li className="flex items-center gap-1">
            <ClockIcon className="w-5 h-5" />
            <span>{createdAt}</span>
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-slate-600 hover:bg-slate-500 cursor-pointer p-2 rounded font-news"
          onClick={handleClick}
        >
          {showContent ? "Hide" : "View"} article
        </button>
      </div>
    </li>
  );
}

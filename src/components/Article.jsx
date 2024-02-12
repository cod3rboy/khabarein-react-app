import { useState } from "react";
import { BookmarkIcon as SaveIconOutlined } from "@heroicons/react/24/outline";
import { BookmarkIcon as SaveIconSolid } from "@heroicons/react/24/solid";
import {
  UserCircleIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import timesago from "timesago";

export default function Article({ article }) {
  const [contentVisible, setContentVisible] = useState(false);
  const createdAt = timesago(
    moment(
      article.date + ", " + article.time,
      "dddd, DD MMMM, YYYY, hh:mm a"
    ).toDate()
  );
  function handleClick() {
    setContentVisible((prevContentVisible) => !prevContentVisible);
  }
  return (
    <li className="mb-4 bg-white shadow rounded">
      <img
        className="h-48 w-full object-cover rounded-t lg:h-56"
        src={article.imageUrl}
        alt={article.title}
      />
      <div className="flex items-center justify-between border-b border-slate-200">
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

      {contentVisible && (
        <p className="p-2 font-news text-justify">
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

      <div className="p-2 flex justify-between items-center bg-slate-100 rounded-b text-slate-600">
        <ul className="text-sm  flex flex-col gap-1">
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
          className="hover:bg-slate-400 rounded-full w-11 h-11 p-3 border border-slate-200"
          onClick={handleClick}
        >
          {contentVisible ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </li>
  );
}

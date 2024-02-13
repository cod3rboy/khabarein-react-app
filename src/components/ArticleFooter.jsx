import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function ArticleFooter({
  author,
  createdAt,
  actionIcon: ActionIcon,
  onAction,
}) {
  return (
    <div className="p-2 flex justify-between items-center bg-slate-100 rounded-b text-slate-600">
      <ul className="text-sm  flex flex-col gap-1">
        <li className="flex items-center gap-1">
          <UserCircleIcon className="w-5 h-5" />
          <span>{author}</span>
        </li>
        <li className="flex items-center gap-1">
          <ClockIcon className="w-5 h-5" />
          <span>{createdAt}</span>
        </li>
      </ul>
      <button
        type="button"
        className="hover:bg-slate-400 rounded-full w-11 h-11 p-3 border border-slate-200"
        onClick={onAction}
      >
        {ActionIcon && <ActionIcon className="w-5 h-5" />}
      </button>
    </div>
  );
}

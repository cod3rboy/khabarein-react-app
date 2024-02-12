import { BookmarkIcon, NewspaperIcon } from "@heroicons/react/24/solid";
export default function Tabs({ ...props }) {
  return (
    <section {...props}>
      <ul className="flex text-slate-600">
        <li className="px-2 flex gap-2 items-center border-b-2 border-slate-600 hover:bg-slate-400 hover:text-slate-100 transition-colors">
          <NewspaperIcon className="w-6 h-6" />
          <button className="py-2 ">What&apos;s happening?</button>
        </li>
        <li className="px-2 flex gap-2 items-center border-b-2 border-slate-300 hover:bg-slate-400 hover:text-slate-100 transition-colors">
          <BookmarkIcon className="w-6 h-6" />
          <button className="py-2 ">Saved</button>
        </li>
      </ul>
    </section>
  );
}

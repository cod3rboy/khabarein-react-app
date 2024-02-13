import { toTitleCase } from "../utils.js";

export default function CategorySelect({ options, selected, onChange }) {
  function handleChange(e) {
    if (onChange) onChange(e.target.value);
  }
  return (
    <div className="py-2 font-news flex justify-start sm:justify-end items-center gap-3">
      <label className="text-amber-900 hidden sm:block" htmlFor="news-category">
        Category
      </label>
      <select
        id="news-category"
        className="rounded bg-slate-100"
        onChange={handleChange}
        value={selected}
      >
        {options.map((category) => (
          <option key={category} value={category}>
            {toTitleCase(category)}
          </option>
        ))}
      </select>
    </div>
  );
}

function Container({ children, ...props }) {
  return (
    <div {...props}>
      <ul className="flex text-slate-600">{children}</ul>
    </div>
  );
}

function Item({ title = "", icon: Icon, active = false, ...props }) {
  return (
    <li
      className={`border-b-2 ${
        active ? "border-b-slate-600" : "border-b-slate-300"
      } hover:bg-slate-400 hover:text-slate-100 transition-colors`}
    >
      <button className="p-2 flex gap-2 items-center" {...props}>
        {Icon && <Icon className="w-6 h-6" />}
        <span>{title}</span>
      </button>
    </li>
  );
}

const Tab = { Container, Item };

export default Tab;

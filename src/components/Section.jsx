export default function Section({ heading, children, ...props }) {
  return (
    <section className="px-2 max-w-xl mx-auto" {...props}>
      <h2 className="font-news text-xl text-amber-900 p-1 mb-4 border-b border-amber-900 border-opacity-10">
        {heading}
      </h2>
      {children}
    </section>
  );
}

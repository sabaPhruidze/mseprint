export default function CollapsibleText({ text }: { text: string }) {
  const full = (text || "").trim();
  const s = full.split(/(?<=[.!?])\s+/);
  const preview = s.slice(0, 3).join(" ");
  const rest = s.slice(3).join(" ");

  if (!full) return null;

  return (
    <>
      <details className="w-full md:hidden group text-left" role="group">
        <summary className="cursor-pointer marker:hidden list-none text-left">
          <span>{preview}</span>
          {rest && (
            <>
              <span className="ml-1 text-blue-600 group-open:hidden">
                see more&nbsp;…
              </span>
              <span className="ml-1 text-blue-600 hidden group-open:inline">
                see less
              </span>
            </>
          )}
        </summary>
        {rest && <div className="mt-2 text-left">{rest}</div>}
      </details>

      <div className="hidden md:block text-left">
        <p className="text-left">{full}</p>
      </div>
    </>
  );
}

type ListItem = { id: string | number; page?: string; content?: string };

export default function CollapsibleList({ list }: { list: ListItem[] }) {
  if (!list?.length) return null;

  const first = list[0];
  const rest = list.slice(1);

  return (
    <>
      <details className="w-full md:hidden group mt-2 text-left" role="group">
        <summary className="cursor-pointer marker:hidden list-none text-left">
          <div className="text-left">
            {first.page && <strong>{first.page}</strong>}
            {first.content && (
              <span>
                {first.page ? " - " : ""}
                {first.content}
              </span>
            )}
            {rest.length > 0 && (
              <>
                <span className="ml-1 text-blue-600 group-open:hidden">
                  see more&nbsp;…
                </span>
                <span className="ml-1 text-blue-600 hidden group-open:inline">
                  see less
                </span>
              </>
            )}
          </div>
        </summary>

        {rest.length > 0 && (
          <ul className="list-disc list-inside mt-2 space-y-2 text-left">
            {rest.map((item) => (
              <li key={item.id} className="text-left">
                {item.page && <strong>{item.page}</strong>}
                {item.content && (
                  <span>
                    {item.page ? " - " : ""}
                    {item.content}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </details>

      <ul className="hidden md:block list-disc list-inside mt-2 space-y-2 text-left">
        {list.map((item) => (
          <li key={item.id} className="text-left">
            {item.page && <strong>{item.page}</strong>}
            {item.content && (
              <span>
                {item.page ? " - " : ""}
                {item.content}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

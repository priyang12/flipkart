import { AiOutlineClose } from "react-icons/ai";

export function RemoveButton({
  RemoveFn,
  item,
}: {
  RemoveFn: (item: string) => void;
  item: string;
}) {
  return (
    <button
      className="flex items-center focus:line-through justify-between p-1 rounded-md hover:line-through bg-primary gap-2 text-xl"
      onClick={() => RemoveFn(item)}
    >
      <div className="truncate">{item.toUpperCase()}</div>
      <AiOutlineClose />
    </button>
  );
}

import type { WalkthroughItem } from "@/lib/pokemon/walkthroughs";

interface ItemListProps {
  items: WalkthroughItem[];
}

export function ItemList({ items }: ItemListProps) {
  if (items.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-750">
        <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-400">
          🎒 Items
        </h4>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
        {items.map((itm, i) => (
          <div key={`${itm.name}-${i}`} className="flex items-start gap-2 px-4 py-2.5">
            <span className="text-sm font-semibold text-gray-900 dark:text-white shrink-0">
              {itm.name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">
              — {itm.location}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

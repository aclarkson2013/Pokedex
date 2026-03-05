interface TipsTabProps {
  tips: string[];
  features: string[];
}

export function TipsTab({ tips, features }: TipsTabProps) {
  return (
    <div className="space-y-5">
      {/* Key Features */}
      <div>
        <h3 className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
          Key Features
        </h3>
        <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
          <ul className="space-y-2">
            {features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="mt-0.5 shrink-0 text-green-500">✦</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tips & Tricks */}
      <div>
        <h3 className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
          Tips & Tricks
        </h3>
        <div className="space-y-2">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-[10px] font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed dark:text-gray-300">
                  {tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

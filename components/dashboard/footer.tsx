const footerData = [
  "home",
  "documentation",
  "guides",
  "help",
  "contact sales",
  "blog",
  "changelog",
  "pricing",
  "enterprise",
  "legal"
]
export default function Footer() {
  return (
    <div className={"p-4"}>
      <div className={"flex flex-row gap-4 items-center justify-between"}>
        <div className={"flex items-center gap-4"}>
        <div>⏶ Vercel</div>
        <div className={"text-gray-400 text-xs"}>Copyright © 2023 Vercel Inc. All rights reserved.</div>
        </div>
        <div className={"flex gap-4 text-sm"}>
          <div className={"border py-1 rounded capitalize flex flex-row gap-1 items-center"}>
            <div className={"px-2 text-gray-800"}>command menu</div>
            <div className={"w-4 h-4 bg-gray-100 border"}></div>
            <div className={"w-4 h-4 bg-gray-100 border mr-2"}></div>
          </div>
          <div className={"border py-1 rounded capitalize flex flex-row gap-1 items-center"}>
            <div className={"px-2 text-gray-800"}>status:</div>
            <div className={"w-3 h-3 bg-blue-600 rounded-full"}>
            </div>
            <div className="text-blue-600 pr-2">
              All systems normal.
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center gap-4 capitalize text-sm justify-between pt-2"}>
        {footerData.map((title) =>
        <div className={"text-gray-400"}>{title}</div>)}
        <div className={"flex gap-2 items-center"}>
        <div className={"w-5 h-5 rounded-full border bg-gray-200"}></div>
        <div className={"text-2xl font-thin text-gray-100"}> | </div>
        <div className={"w-5 h-5 rounded-full border bg-gray-200"}></div>
        </div>
      </div>
    </div>
  )
}
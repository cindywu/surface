import React from 'react'

export default function SubMenu({ subMenuData }: { subMenuData: string[]}) {
  return (
    <div className={"flex pr-4 pl-2 pt-2 pb-1 text-gray-400 border-b border-gray-200"}>
        {subMenuData.map((title: string) =>
          <div className={"px-2 py-1 capitalize cursor-pointer rounded-sm text-sm hover:bg-gray-100 hover:text-black"}>
            {title}
          </div>
        )}
      </div>
  )
}

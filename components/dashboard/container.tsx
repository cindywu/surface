import AddNewButton from '../../components/buttons/addNew'
export default function Container({ projectData }: { projectData: string[]}) {
  return (
    <div className={"bg-gray-100 grow flex flex-col px-4 pt-6"}>
      <div className={"flex justify-between bg-gray-100 mb-4"}>
        <SearchBar/>
        <div className={"border border-gray-200 bg-white flex mx-2 rounded-sm"}>
          <div className={"w-6 h-6 rounded-sm bg-gray-200 m-2"}>
          </div>
          <div className={"w-6 h-6 rounded-sm bg-gray-200 m-2"}>
          </div>
      </div>
      <AddNewButton/>
      </div>
      <ProjectGrid
        projectData={projectData}
      />
    </div>
  )
}

function ProjectGrid({ projectData }: { projectData: string[]} ) {
  return (
    <div className={"grow p-4 grid grid-cols-3 gap-4"}>
      {projectData.slice(0,6).map((title)=>
        <div className={"p-4 bg-white border rounded-md"}>
          <div className={"flex items-center"}>
          <div className={"bg-black h-8 w-8 rounded-full"}></div>
          <div className={""}>
            <div className={"pl-3"}>{title}</div>
            <div className={"pl-3 text-sm font-light text-gray-500"}>{title}.vercel.app</div>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SearchBar() {
  return (
    <div className={"flex p-2 border border-gray-200 bg-white items-center rounded grow"}>
      <div className={"w-4 h-4 rounded-sm bg-gray-100 mr-2"}>
      </div>
      <div>
        <input
          className={"text-sm focus:outline-none"}
          placeholder={'Search...'}
        />
      </div>
    </div>
  )
}

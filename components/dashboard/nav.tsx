import FeedbackButton from '../buttons/feedbackButton'
export default function Nav({ navData }: { navData: string[]}) {
  return (
    <div className={"px-4"}>
      <div className={"flex justify-between "}>
        <div className={"flex items-center"}>
          <div className={"text-5xl pr-2"}>⏶</div>
          <div className={"text-3xl text-gray-200 px-4 font-thin"}>⁄</div>
          <div className={"flex"}>
          <img className="w-7 h-7 rounded-full border-gray-200" src="https://i.imgur.com/SJ4iDSf.png" alt="Rounded avatar"></img>
          <div className={"px-2"}>
            <span className={"text-sm"}>jellypbc</span></div>
          <div className={"pr-2"}>
            <span className={"capitalize text-xs bg-blue-600 rounded-full px-2 py-1 text-white"}>pro</span>
          </div>
          {/* <div>more</div> */}
          </div>
        </div>
        <div className={"flex my-2 items-center text-gray-400"}>
          <FeedbackButton title="feedback"/>
          {navData.map((title) =>
            <div className={"capitalize pr-4 text-sm cursor-pointer hover:text-black"}>{title}</div>
          )}
          <div className={"pr-2"}>
          <div className="w-7 h-7 rounded-full border border-1 border-gray-200 cursor-pointer hover:bg-gray-200"></div>
          </div>
          <div>
          <img className="w-7 h-7 rounded-full border-gray-200 cursor-pointer" src="https://i.imgur.com/OJJtHQW.jpeg" alt="Rounded avatar"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

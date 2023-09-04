import { RocketIcon, StarFilledIcon } from "@radix-ui/react-icons";

const SubtitleCard = ({ subTitle, rateScore, rates, closeTime }) => {
  return (
    <>
      <h2 className="text-4xl font-bold mt-[15px]">{subTitle}</h2>
      <div className="flex mt-[20px] items-center">
        <RocketIcon width={"30"} height={"30"} className="mr-[10px]" />
        <div className="flex flex-col">
          <div className="flex items-center">
            <StarFilledIcon className="mr-[3px]" />
            <div className="text-sm font-bold">
              <span className="mr-2">{rateScore}</span>
              <span className="mr-2">({rates})</span>
              <span className="mr-2">• $ •</span>
              <a href="#" className="underline">
                More info
              </a>
            </div>
          </div>
          <span className="text-sm text-gray-500">Open until {closeTime}</span>
        </div>
      </div>
    </>
  );
};

export default SubtitleCard;

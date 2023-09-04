import Card from "../common/Card";
import Aside from "./Aside";
import SubtitleCard from "./Subtitle";

const Content = () => {
  const tempList = [
    "Most Popular",
    "Buy 1, Get 1 Free",
    "Picked for you",
    "人氣精選",
    "布朗特製奶蓋",
    "冰沙系列",
    "布朗擠牛奶",
    "艾波切水果",
    "艾波貴婦下午茶",
    "布朗一覺好眠",
  ];
  const tempDrinksList = [
    {
      name: "布朗尼鮮奶茶",
      src: "/item1.webp",
      price: "80",
    },
    {
      name: "紅芭樂多多",
      src: "/item2.webp",
      price: "80",
    },
    {
      name: "布朗尼鮮奶茶",
      src: "/item1.webp",
      price: "80",
    },
    {
      name: "紅芭樂多多",
      src: "/item2.webp",
      price: "80",
    },
    {
      name: "布朗尼鮮奶茶",
      src: "/item1.webp",
      price: "80",
    },
    {
      name: "紅芭樂多多",
      src: "/item2.webp",
      price: "80",
    },
    {
      name: "布朗尼鮮奶茶",
      src: "/item1.webp",
      price: "80",
    },
    {
      name: "紅芭樂多多",
      src: "/item2.webp",
      price: "80",
    },
  ];
  let tempLink = "/item1.webp";

  return (
    <div className="px-[5%]">
      <SubtitleCard
        subTitle={"茶與布朗 板橋府中店"}
        rateScore={"4.9"}
        rates={"200+ ratings"}
        closeTime={"10:00 PM"}
      />
      <div className="flex">
        <div className=" overflow-y-auto">
          <Aside itemsList={tempList} />
        </div>
        <div className="mt-[40px] w-full">
          {tempList.map((e, i) => {
            return (
              <div key={i} className="mb-[40px]" id={`item${i}`}>
                <h3 className="py-[10px] text-[1.6rem] font-extrabold tracking-tight">
                  {e}
                </h3>
                <div className="flex overflow-x-scroll no-scrollbar">
                  {tempDrinksList.map((e, i) => {
                    return (
                      <Card
                        name={e.name}
                        imageLink={e.src}
                        price={e.price}
                        key={i}
                        className="px-[10px] min-w-[20%]"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;

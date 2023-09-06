import Aside from '../common/Aside';
import { ButtonPageChange } from '../common/ButtonItemChange';
import Card from '../common/Card';
import SubtitleCard from './Subtitle';

const Content = () => {
    const tempList = [
        'Most Popular',
        'Buy 1, Get 1 Free',
        'Picked for you',
        '人氣精選',
        '布朗特製奶蓋',
        '冰沙系列',
        '布朗擠牛奶',
        '艾波切水果',
        '艾波貴婦下午茶',
        '布朗一覺好眠',
    ];
    const tempDrinksList = [
        {
            name: '布朗尼鮮奶茶',
            src: '/item1.webp',
            price: '80',
        },
        {
            name: '紅芭樂多多',
            src: '/item2.webp',
            price: '80',
        },
        {
            name: '布朗尼鮮奶茶',
            src: '/item1.webp',
            price: '80',
        },
        {
            name: '紅芭樂多多',
            src: '/item2.webp',
            price: '80',
        },
        {
            name: '布朗尼鮮奶茶',
            src: '/item1.webp',
            price: '80',
        },
        {
            name: '紅芭樂多多',
            src: '/item2.webp',
            price: '80',
        },
        {
            name: '布朗尼鮮奶茶',
            src: '/item1.webp',
            price: '80',
        },
        {
            name: '紅芭樂多多',
            src: '/item2.webp',
            price: '80',
        },
    ];
    const tempData = [
        {
            name: 'Most Popular',
            list: [
                {
                    name: '布朗尼鮮奶茶',
                    src: '/item1.webp',
                    price: '80',
                },
                {
                    name: '紅芭樂多多',
                    src: '/item2.webp',
                    price: '80',
                },
            ],
        },
        {
            name: 'Most Popular',
            list: [
                {
                    name: '布朗尼鮮奶茶',
                    src: '/item1.webp',
                    price: '80',
                },
                {
                    name: '紅芭樂多多',
                    src: '/item2.webp',
                    price: '80',
                },
            ],
        },

        // 'Buy 1, Get 1 Free',
        // 'Picked for you',
        // '人氣精選',
        // '布朗特製奶蓋',
        // '冰沙系列',
        // '布朗擠牛奶',
        // '艾波切水果',
        // '艾波貴婦下午茶',
        // '布朗一覺好眠',
    ];
    const tempData1 = [];

    tempList.forEach((e, i) => {
        tempData1.push({
            name: `${e}`,
            list: tempDrinksList.slice(0, tempDrinksList.length - 1),
        });
    });

    let nowTrans = 0;

    const handlePrevClick = () => {
        const cardBlock = document.querySelectorAll('.card-block');
        const cardBox = cardBlock[0].querySelector('.card-box');
        const cards = cardBox.querySelectorAll('.card');

        let cardWidth = cards[0].offsetWidth;
        // nowTrans--;

        if (nowTrans > (cards.length - 5) * -1) {
            nowTrans -= 1;
            cardBox.style.transform = `translateX(${nowTrans * cardWidth}px)`;
            console.log(nowTrans, cards.length);
        }
    };

    const handleNextClick = () => {
        const cardBlock = document.querySelectorAll('.card-block');
        const cardBox = cardBlock[0].querySelector('.card-box');
        const cards = cardBox.querySelectorAll('.card');

        let cardWidth = cards[0].offsetWidth;

        if (nowTrans < 0) {
            nowTrans += 1;
            cardBox.style.transform = `translateX(${nowTrans * cardWidth}px)`;
            console.log(nowTrans, cards.length);
        }
    };

    return (
        <div className="px-[5%]">
            <SubtitleCard
                subTitle={'茶與布朗 板橋府中店'}
                rateScore={'4.9'}
                rates={'200+ ratings'}
                closeTime={'10:00 PM'}
            />
            <div className="flex">
                <div className="self-stretch relative left-[-100%] md:left-0 transition-all">
                    <Aside itemsList={tempList} />
                </div>
                <div className="mt-[40px] w-full">
                    {tempData1.map((e, i) => {
                        return (
                            <div key={i} className="mb-[40px]" id={`item${i}`}>
                                <h3 className="py-[10px] text-[1.6rem] font-extrabold tracking-tight">
                                    {e.name}
                                </h3>
                                {i == 0 && (
                                    <div className="flex justify-end">
                                        <ButtonPageChange onClick={handlePrevClick}>
                                            <span className="w-full h-full leading-[2.1rem]">
                                                {'<'}
                                            </span>
                                        </ButtonPageChange>
                                        <ButtonPageChange onClick={handleNextClick}>
                                            <span className="w-full h-full leading-[2.1rem]">
                                                {'>'}
                                            </span>
                                        </ButtonPageChange>
                                    </div>
                                )}
                                <div className="card-block overflow-hidden">
                                    <div className="flex no-scrollbar py-[20px] card-box transition-all">
                                        {e.list.map((list, i) => {
                                            return (
                                                <Card
                                                    name={list.name}
                                                    imageLink={list.src}
                                                    price={list.price}
                                                    key={i}
                                                    className="px-[1%] min-w-[50%] md:min-w-[20%] card"
                                                />
                                            );
                                        })}
                                    </div>
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

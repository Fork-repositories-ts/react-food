import { HamburgerMenuIcon, DrawingPinFilledIcon, BackpackIcon } from '@radix-ui/react-icons';
import ButtonShopCart from './common/ButtonShopCart';

const Header = () => {
    return (
        <div className="flex pt-[20px] px-[5%] items-center justify-between  flex-wrap md:flex-nowrap">
            <div className="flex items-center mr-[20px] w-full md:w-[30%]">
                <HamburgerMenuIcon width={'20'} height={'20'} className="mr-[20px]" />
                <h1 className="text-3xl">
                    <a href="#">
                        Demo
                        <span className="font-bold pl-[5px]">Eats</span>
                    </a>
                </h1>
            </div>
            <div className="flex flex-1 w-full justify-between mt-4 md:mt-0">
                <div className="flex items-center w-[80%] mr-[20px]">
                    <DrawingPinFilledIcon
                        className="absolute pl-[5px]"
                        width={'20'}
                        height={'20'}
                    />
                    <form action="" className="w-full">
                        <label htmlFor="address" className=""></label>
                        <input
                            id="address"
                            type="text"
                            placeholder="請輸入地址"
                            className="pl-[30px] outline-none min-h-[50px] focus:border-b-2 border-black w-full bg-gray-200"
                        />
                    </form>
                </div>
                {/* <ButtonShopCart icon count={0} name={'購物車'}/> */}
                <ButtonShopCart count={0} name={'購物車'}>
                    <BackpackIcon />
                </ButtonShopCart>
            </div>
        </div>
    );
};

export default Header;

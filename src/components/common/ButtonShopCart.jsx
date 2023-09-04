// import { BackpackIcon } from "@radix-ui/react-icons";

// const ButtonShopCart = ({icon}) => {
//   return (
//     <div className="flex items-center h-[40px] bg-black text-white font-bold rounded-[15px] px-[15px] py-[5px] shrink-0 hover:cursor-pointer">
//       {icon?<BackpackIcon />:null}
//       <div className="mx-[5px] hidden md:block">0</div>
//       <div className="hidden md:block">購物車</div>
//     </div>
//   );
// };
// export default ButtonShopCart;

const ButtonShopCart = ({ icon, name, count, children }) => {
  return (
    <div className="flex items-center h-[40px] bg-black text-white font-bold rounded-[15px] px-[15px] py-[5px] shrink-0 hover:cursor-pointer">
      {/* {icon ? <BackpackIcon /> : null} */}
      {children}
      <div className="mx-[5px] hidden md:block">{count}</div>
      <div className="hidden md:block">{name}</div>
    </div>
  );
};
export default ButtonShopCart;

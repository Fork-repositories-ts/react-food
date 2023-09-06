import { useState } from 'react';

const Aside = ({ itemsList }) => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <ul className="pt-[30px] w-[20%] min-w-[250px] absolute md:sticky top-0">
            {itemsList.map((e, i) => {
                {
                    console.log('now', itemsList[i], i);
                }
                if (i == 0) {
                    return (
                        <li className="underline font-bold text-[1rem] mb-3" key={i}>
                            <a href={`#item${i}`}>{e}</a>
                        </li>
                    );
                } else if (i <= 2) {
                    return (
                        <li className="font-bold text-[1rem] mb-3" key={i}>
                            <a href={`#item${i}`} className="hover:text-[1.1rem]">
                                {e}
                            </a>
                        </li>
                    );
                } else {
                    return (
                        <li className="text-[1rem] mb-3" key={i}>
                            <a href={`#item${i}`} className="hover:text-[1.1rem]">
                                {e}
                            </a>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default Aside;

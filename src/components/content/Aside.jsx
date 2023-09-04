const Aside = ({ itemsList }) => {
  return (
    <ul className="mt-[30px] w-[20%] min-w-[400px] sticky">
      {itemsList.map((e, i) => {
        if (i < 2) {
          return (
            <li className="font-bold text-[1rem] mb-3" key={i}>
              <a href={`#item${i}`} className="hover:text-[1.1rem]">
                {e}
              </a>
            </li>
          );
        } else if (i == 0) {
          <li className="underline font-bold text-[1rem] mb-3">
            <a href={`#item${i}`}>{e}</a>
          </li>;
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

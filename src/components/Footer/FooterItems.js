const FooterItems = ({ title, items }) => {
  return (
    <div className="mt-5">
      <h3 className="font-bold text-lg mb-3 mt-1">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li className="text-gray-400 text-base" key={index}>  
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
          key={item.card.info.id}
        >
          <div>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
//1hr:07min
export default ItemList;

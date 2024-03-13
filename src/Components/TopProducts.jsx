const TopProducts = () => {
  return (
    <div className="text-center grid place-items-center gap-5">

      <div className="grid row-span-3  gap-4 p-2">
        <div style={{backgroundColor:"#AACEDA"}}>
          <p>Coffe on Sundays</p>
        </div>
        <div style={{backgroundColor:"#FDD3C2"}}>
          <p>Lunch in the Morning</p>
        </div>
        <div style={{backgroundColor:"#FDE5DB"}}>
          <p>Fruit in the Morning</p>
        </div>
      </div>

    </div>
  );
};

export default TopProducts;

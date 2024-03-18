export default function TopProducts() {
  return (
    <div className="">
      <div className="mt-8 text-center grid gap-2">
        <div className="grid sm:grid-cols-3 gap-5">
          <div
            className="p-3 h-56"
            style={{ backgroundColor: "#AACEDA" }}
          >
            <p>Coffe on Sundays</p>
          </div>
          <div
            className="p-3 h-56"
            style={{ backgroundColor: "#FDD3C2" }}
          >
            <p>Lunch in the Morning</p>
          </div>
          <div
            className="p-3 h-56"
            style={{ backgroundColor: "#FDE5DB" }}
          >
            <p>Fruit in the Morning</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div
            className="p-3 h-56"
            style={{ backgroundColor: "#B6F2A6" }}
          >
            <p>Coffe on Sundays</p>
          </div>
          <div
            className="p-3 h-56"
            style={{ backgroundColor: "#FAB5CB" }}
          >
            <p>Lunch in the Morning</p>
          </div>
          <div
            className="p-3 h-56"
            style={{ backgroundColor: "#A9F6BA" }}
          >
            <p>Fruit in the Morning</p>
          </div>
        </div>
      </div>
    </div>
  );
}

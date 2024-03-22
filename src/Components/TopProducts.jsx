export default function TopProducts() {
  return (
    <div className="">
      <div className="mt-8 text-center grid gap-2">
        <div className="grid sm:grid-cols-3 gap-5">
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#AACEDA" }}
            >
              <p>Coffe on Sundays</p>
            </div>
          </a>
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#FDD3C2" }}
            >
              <p>Lunch in the Morning</p>
            </div>
          </a>
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#FDE5DB" }}
            >
              <p>Fruit in the Morning</p>
            </div>
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#B6F2A6" }}
            >
              <p>Coffe on Sundays</p>
            </div>
          </a>
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#FAB5CB" }}
            >
              <p>Lunch in the Morning</p>
            </div>
          </a>
          <a href="">
            <div
              className="p-3 h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              style={{ backgroundColor: "#A9F6BA" }}
            >
              <p>Fruit in the Morning</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

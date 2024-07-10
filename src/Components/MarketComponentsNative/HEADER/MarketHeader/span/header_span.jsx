import Button from "../../../../MarketReutil/MarketButton/Button";
//Import locals
import { LOCALS_NAVIGATION } from "../locales/locals_navigation";
export default function SpanNavigation() {
  const {NAVIGATION} = LOCALS_NAVIGATION
  return (
    <>
      <div className="h-auto p-5" style={{ backgroundColor: "#7AD063" }}>
        <div className="place-items-center sm:grid grid-cols-2">
          <div>
            <p className="text-white text-1xl leading-4 font-bold mb-5">{NAVIGATION.spanTitle}</p>

            <h1 className="text-white text-5xl font-bold">{NAVIGATION.bigSpanTitle}</h1>
            <p className="text-white text-1xl mt-5 leading-normal">{NAVIGATION.bannerSpan}</p>

            <Button />
          </div>

          <div className="relative inset-0 flex">
            <img
              className="hidden sm:flex items-center animate-slideInRight"
              srcSet="/public/images/saladMain-removebg-preview.png"
              alt="Image Salad"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import INPUT_LOCALS from "../locales/locales";
const { valueInputLocation } = INPUT_LOCALS;
export default function Input() {
  return (
    <>
      <div className="bigSpan bg-[#7ad063]">
        <input
          className="p-[0.5rem] w-full rounded-full"
          type="text"
          placeholder={valueInputLocation}
        />{" "}
        <br /> o <a href="">Inicia Sesion</a>
      </div>
    </>
  );
}

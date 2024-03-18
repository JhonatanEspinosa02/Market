import Button from "./Button";

const EatClean = () => {
  return (
    <div
      className="h-auto p-5"
      style={{ backgroundColor: "#7AD063" }}
    >
      <div className="place-items-center sm:grid grid-cols-2">
        <div>
          <p className="text-white text-1xl leading-4 font-bold mb-5">Title heading of mall online</p>

          <h1 className="text-white text-5xl font-bold">
            Eat clean & green, <br /> Eat organic
          </h1>
          <p className="text-white text-1xl mt-5 leading-normal">
            Lorem ips quas velit atque cumque <br /> asperiores neque porro sint, possimus ips quas velit . 
          </p>

            <Button />
        </div>
        
        <div className="relative inset-0 flex">
          <img className="hidden sm:flex items-center animate-slideInRight"
            srcSet="./public/images/saladMain-removebg-preview.png"
            alt="Image Salad"
          />
        </div>
      </div>
    </div>
  )
}

export default EatClean;

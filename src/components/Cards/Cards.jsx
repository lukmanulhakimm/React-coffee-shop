const Cards = (props) => {
  return (
    <>
      <div className="w-full relative">
        {props.isFlashSale ? (
          <div className="absolute top-2 right-0 p-2">
            <span className="p-[10px] bg-danger rounded-[24px] text-white font-bold">
              FLASH SALE!
            </span>
          </div>
        ) : (
          ""
        )}
        <img
          src={props.imagePath}
          alt="ice-blend"
          className="w-full"
          width="100%"
        />
        <div className="w-full px-2 -mt-[30px] relative">
          <div className="bg-white p-3 shadow-md">
            <h1 className="font-xl md:font-xxl font-medium pb-3">
              {props.nameProduct}
            </h1>
            <p className="font-desc pb-3 text-[#4F5665]">{props.desc}</p>
            <h1 className="text-primary font-xxl pb-3">{props.idr}</h1>
            <div className="flex flex-col gap-2 md:flex-row">
              <button className="btn text-center bg-primary rounded-md py-2 font-semibold w-full font-md">
                Buy
              </button>
              <button className="btn border-primary border py-1 md:py-2 items-center md:w-[58px]">
                <img
                  src="/public/icons/market.webp"
                  alt="shopping"
                  className="md:w-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

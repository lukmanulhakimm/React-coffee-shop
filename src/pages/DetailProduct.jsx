import Cards from "../components/Cards/Cards";
import Pagination from "../components/pagination/Paginations";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import { useState } from "react";
const DetailProduct = () => {
  const [jumlah, setJumlah] = useState(1);
  return (
    <MainLayout bg="bg-[#0B0909]" mt=" mt-[100px] md:mt-[186px]">
      <div className={`wrapper `}>
        <div className="container">
          <div className="grid-template ">
            <div className="md:col-span-6 col-span-12 w-full">
              <img
                src="../public/image/coffee1.webp"
                alt=""
                className="w-full"
              />
              <div className="grid grid-cols-3 gap-5 mt-6">
                <div>
                  <img src="../public/image/coffee2.webp" alt="" />
                </div>
                <div>
                  <img src="../public/image/coffee3.webp" alt="" />
                </div>
                <div>
                  <img src="../public/image/coffee4.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 w-full">
              <div className="pt-2">
                <span className="p-[10px] bg-danger rounded-[24px] text-white font-bold">
                  FLASH SALE!
                </span>
              </div>
              <h1 className="font-title font-semibold mt-4">Hazelnut Latte</h1>
              <div className="mt-4 flex gap-2 items-end">
                <div className="flex items-center gap-3">
                  <p className="font-sm">
                    <s className="text-danger font-sm md:font-md">IDR 20.000</s>
                  </p>
                  <p className="font-sm md:font-xxl font-medium text-primary">
                    IDR 10.000
                  </p>
                </div>
              </div>
              <div className="flex gap-6 pt-[16px] items-center">
                <img src="/public/icons/bintang.webp" alt="bintang" />
                <img src="/public/icons/bintang.webp" alt="bintang" />
                <img src="/public/icons/bintang.webp" alt="bintang" />
                <img src="/public/icons/bintang.webp" alt="bintang" />
                <img src="/public/icons/bintang.webp" alt="bintang" />
                <div className="font-lg">
                  <p>5.0</p>
                </div>
              </div>
              <div>
                <div className="flex gap-4 mt-4">
                  <div className="pr-4 border-r-[1px] ">
                    <h3>200+ Review</h3>
                  </div>
                  <div>
                    <h3>Recommendation</h3>
                  </div>
                  <div>
                    <img src="../public/icons/like.webp" alt="like" />
                  </div>
                </div>
              </div>
              <div className="font-desc pt-4">
                <p>
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </p>
              </div>
              <div className="flex w-full mt-4">
                <button
                  onClick={() => {
                    if (jumlah > 1) {
                      setJumlah(jumlah - 1);
                    }
                  }}
                  type="button"
                  className="flex clickable justify-center border border-primary rounded text-2xl pb-2 items-center w-8 h-8"
                >
                  -
                </button>
                <h2 className="text-lg text-center border-y-2 px-4 border-[#E8E8E8]">
                  {jumlah}
                </h2>
                <button
                  type="button"
                  className=" flex clickable justify-center bg-primary rounded text-2xl pb-2 items-center w-8 h-8"
                  onClick={() => {
                    setJumlah(jumlah + 1);
                  }}
                >
                  +
                </button>
              </div>
              <h1 className="text-lg font-bold pt-4">Choose Size</h1>
              <ul className="grid w-full gap-6 grid-cols-3 mt-[13px]">
                <li>
                  <input
                    type="radio"
                    id="dine-in"
                    name="delivery"
                    value="dine-in"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="dine-in"
                    className="btn rounded-[6px] text-center items-center justify-between w-full bg-white border border-[#E8E8E8] cursor-pointer peer-checked:border-primary"
                  >
                    <p className="w-full font-lg text-center">Reguler</p>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="door-delivery"
                    name="delivery"
                    value="door-delivery"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="door-delivery"
                    className="btn rounded-[6px] text-center items-center justify-between w-full bg-white border border-[#E8E8E8] cursor-pointer peer-checked:border-primary"
                  >
                    <p className="w-full font-lg text-center">Medium</p>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="pick-up"
                    name="delivery"
                    value="pick-up"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="pick-up"
                    className="btn rounded-[6px] text-center items-center justify-between w-full bg-white border border-[#E8E8E8] cursor-pointer peer-checked:border-primary"
                  >
                    <p className="w-full font-lg text-center">Large</p>
                  </label>
                </li>
              </ul>
              <h1 className="text-lg font-bold pt-4">Hot/Ice?</h1>
              <ul className="grid w-full gap-6 grid-cols-2 mt-[13px] ">
                <li>
                  <input
                    type="radio"
                    id="ice"
                    name="delivery"
                    value="ice"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="ice"
                    className="btn rounded-[6px] text-center items-center justify-between w-full bg-white border border-[#E8E8E8] cursor-pointer peer-checked:border-primary"
                  >
                    <p className="w-full font-lg text-center">Ice</p>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hot"
                    name="delivery"
                    value="hot"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="hot"
                    className="btn rounded-[6px] text-center items-center justify-between w-full bg-white border border-[#E8E8E8] cursor-pointer peer-checked:border-primary"
                  >
                    <p className="w-full font-lg text-center">Hot</p>
                  </label>
                </li>
              </ul>
              <div className="flex w-full gap-6 mt-14 flex-col md:flex-row">
                <button className="btn border font-semibold border-primary bg-primary w-full ">
                  Buy
                </button>
                <button className="btn border border-primary w-full gap-2">
                  <img src="../public/icons/market.webp" alt="market" />
                  <h3 className="text-primary text-sm font-semibold">
                    add to cart
                  </h3>
                </button>
              </div>
            </div>
          </div>
          <h1 className="font-title text-[#0B0909] pt-[70px]">
            Recommendation <span className="text-[#8E6447]">For You</span>
          </h1>
          <div className="grid-template mt-6">
            <div className="col-span-6 md:col-span-3">
              <Cards
                imagePath="/public/image/image-3.webp"
                isFlashSale={true}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Cards
                imagePath="/public/image/coffee1.webp"
                isFlashSale={true}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Cards
                imagePath="/public/image/coffee1.webp"
                isFlashSale={true}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Cards
                imagePath="/public/image/coffee1.webp"
                isFlashSale={true}
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 mt-[50px]">
            <Pagination />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailProduct;

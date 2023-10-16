import MainLayout from "../components/layouts/MainLayout/MainLayout";
import Cards from "../components/Cards/Cards";
import Paginations from "../components/pagination/Paginations";

const Product = () => {
  return (
    <>
      <MainLayout bg="bg-[#0B0909]" borderP="border-b border-primary">
        <div className="mt-[70px]">
          <div className="wrapper md:hidden">
            <div className="container">
              <div className="flex items-center gap-3 w-full">
                <div className="form-control w-full">
                  <span>
                    <img src="/public/icons/search-2.webp" alt="Search" />
                  </span>
                  <input
                    type="text"
                    id="search"
                    placeholder="Find Product"
                    className="input-control focus-within:input-focus"
                  />
                </div>
                <button className="bg-primary rounded p-[15px]">
                  <img src="/public/icons/Filter.webp" alt="Filter" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[url(/public/image/bg-4.webp)] bg-cover text-white wrapper hidden md:flex">
            <div className="container">
              <div className="max-w-[880px] h-[305px] w-full flex items-center">
                <h1 className="font-medium text-5xl">
                  We Provide Good Coffee and Healthy Meals
                </h1>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="flex pt-12 items-center justify-between">
                <h1 className="text-[#0B0909] md:text-5xl text-2xl">
                  Today<span className="text-brown"> Promo</span>
                </h1>
                <div className="md:flex gap-2 hidden">
                  <button className="rounded-full bg-[#E8E8E8] p-4">
                    <img src="/public/icons/arrow-left.webp" alt="arrow-left" />
                  </button>
                  <button className="rounded-full bg-primary p-4">
                    <img
                      src="/public/icons/arrow-right.webp"
                      alt="arrow-right"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="flex gap-12 overflow-x-hidden mt-[25px]">
              <div className="bg-[#88B788] rounded-3xl flex items-center gap-2 pt-[11px] min-w-[238px] md:min-w-[335px]">
                <img src="/public/image/image-5.webp" alt="logo" />
                <div className="max-w-[195px] w-full">
                  <div>
                    <h1 className="text-sm font-bold">HAPPY MOTHER’S DAY!</h1>
                    <p className="text-sm">
                      Get one of our favorite menu for free!
                    </p>
                  </div>
                  <p className="text-white font-medium pt-[13px]">
                    Klaim Kupon
                  </p>
                </div>
              </div>
              <div className="bg-[#88B788] rounded-3xl flex items-center gap-2 pt-[11px] pl-3 min-w-[238px] md:min-w-[335px]">
                <img src="/public/image/image-5.webp" alt="logo" />
                <div className="max-w-[195px] w-full">
                  <div className="">
                    <h1 className="text-sm font-bold">HAPPY MOTHER’S DAY!</h1>
                    <p className="text-sm">
                      Get one of our favorite menu for free!
                    </p>
                  </div>
                  <p className="text-white font-medium pt-[13px]">
                    Klaim Kupon
                  </p>
                </div>
              </div>
              <div className="bg-[#88B788] rounded-3xl flex items-center gap-2 pt-[11px] pl-3 min-w-[238px] md:min-w-[335px]">
                <img src="/public/image/image-5.webp" alt="logo" />
                <div className="max-w-[195px] w-full">
                  <div className="">
                    <h1 className="text-sm font-bold">HAPPY MOTHER’S DAY!</h1>
                    <p className="text-sm">
                      Get one of our favorite menu for free!
                    </p>
                  </div>
                  <p className="text-white font-medium pt-[13px]">
                    Klaim Kupon
                  </p>
                </div>
              </div>
              <div className="bg-[#F5C361] rounded-3xl flex items-center gap-2 pl-3 min-w-[238px] md:min-w-[335px]">
                <img src="/public/image/image-6.webp" alt="logo" />
                <div className="max-w-[195px] w-full">
                  <div className="">
                    <h1 className="text-sm font-bold">
                      Get a cup of coffee for free on sunday morning
                    </h1>
                    <p className="text-sm">Only at 7 to 9 AM</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5C361] rounded-3xl flex items-center gap-2 pl-3 min-w-[238px] md:min-w-[335px]">
                <img src="/public/image/image-6.webp" alt="logo" />
                <div className="max-w-[195px] w-full">
                  <div className="">
                    <h1 className="text-sm font-bold">
                      Get a cup of coffee for free on sunday morning
                    </h1>
                    <p className="text-sm">Only at 7 to 9 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="container">
              <div className="flex gap-2 pt-[25px]">
                <div className="bg-primary rounded-lg w-[25px] h-[8.44px]"></div>
                <div className="rounded-full bg-[#DDE0E4] w-2 h-2"></div>
                <div className="rounded-full bg-[#DDE0E4] w-2 h-2"></div>
                <div className="rounded-full bg-[#DDE0E4] w-2 h-2"></div>
              </div>
              <h1 className="font-title mt-14">
                Our <span className="text-brown"> Product</span>
              </h1>

              <div className="grid-template">
                <div className="md:col-span-4 hidden md:block">
                  <div className="bg-black text-white w-full py-[27px] px-[30px] flex flex-col gap-[16px] rounded-2xl">
                    <div className="flex justify-between w-full">
                      <h2 className="font-xxl font-semibold">Filter</h2>
                      <h2 className="text-lg font-bold">Reset Filter</h2>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Search</h2>
                    </div>
                    <div className="">
                      <div className="form-control w-full">
                        <input
                          type="text"
                          id="searchProduct"
                          placeholder="Search Your Product"
                          className="input-control focus-within:input-focus text-black"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-bold">Category</p>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          className="accent-primary w-4 h-4"
                          id="Favorite"
                        />
                        <label htmlFor="Favorite">Favorite Product</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="coffee"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="coffee">Coffee</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="non"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="non">Non Coffee</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="food"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="food">Foods</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="add"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="add">Add-On</label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-bold">Sort By</p>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="buy"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="buy">Buy 1 get 1</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="Flash"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="Flash">Flash sale</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="Birthday"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="Birthday">Birthday Package</label>
                      </div>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          id="Cheap"
                          className="accent-primary w-4 h-4"
                        />
                        <label htmlFor="Cheap">Cheap</label>
                      </div>
                    </div>
                    <p className="font-bold">Range Price</p>
                    <div className="input-slider">
                      <div className="range">
                        <div className="range-slider">
                          <span className="range-selected"></span>
                        </div>
                        <div className="range-input">
                          <input
                            type="range"
                            className="min"
                            min="0"
                            max="1000"
                            defaultValue="300"
                            step="10"
                            id="min-range"
                          />
                          <input
                            id="max-range"
                            type="range"
                            className="max"
                            min="0"
                            max="1000"
                            defaultValue="700"
                            step="10"
                          />
                        </div>
                        <div className="range-price">
                          <label htmlFor="min">IDR</label>
                          <input
                            id="min"
                            type="text"
                            name="min"
                            defaultValue="300"
                            className="range-output"
                          />
                          <label htmlFor="max">IDR</label>
                          <input
                            id="max"
                            type="text"
                            name="max"
                            defaultValue="700"
                            className="range-output"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="btn bg-primary w-full text-black text-base font-medium">
                        Apply FIlter
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <div className="grid grid-cols-2 gap-[16px] md:gap-[24px] lg:gap-[32px]">
                    <div className="col-span-1">
                      <Cards
                        isFlashSale={true}
                        imagePath="/public/image/image-3.webp"
                      />
                    </div>
                    <div className="col-span-1">
                      <Cards
                        isFlashSale={true}
                        imagePath="/public/image/image-4.webp"
                      />
                    </div>
                    <div className="col-span-1">
                      <Cards
                        isFlashSale={true}
                        imagePath="/public/image/image-3.webp"
                      />
                    </div>
                    <div className="col-span-1">
                      <Cards
                        isFlashSale={true}
                        imagePath="/public/image/image-4.webp"
                      />
                    </div>
                    <div className="col-span-1">
                      <Cards
                        isFlashSale={true}
                        imagePath="/public/image/image-3.webp"
                      />
                    </div>
                    <div className="col-span-1">
                      <Cards
                        isFlashSale={true}
                        imagePath="/public/image/image-4.webp"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-8 w-full">
                    <Paginations />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Product;

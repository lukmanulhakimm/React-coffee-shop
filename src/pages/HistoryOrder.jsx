import MainLayout from "../components/layouts/MainLayout/MainLayout";
import Paginations from "../components/pagination/Paginations";
const HistoryOrder = () => {
  return (
    <>
      <MainLayout bg="bg-[#0B0909]">
        <div className="wrapper">
          <div className="container">
            <div className="flex items-center md:gap-7 justify-between md:justify-start md:mb-9 mb-2">
              <h1 className="font-title">History Order</h1>
              <div className="text-center text-xs md:text-base flex items-center justify-center px-[10px] bg-light-gray md:w-[45px] md:h-[45px] w-[24px] h-[24px]">
                2
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3">
              <div className="md:col-span-7 col-span-12">
                <div className="grid grid-cols-4 gap-5 items-center">
                  <div className="md:col-span-3 col-span-4 grid grid-cols-3 bg-[#E8E8E899]/[60%] p-[10px] text-center gap-3 order-2 md:order-1">
                    <div className="bg-white py-[10px]">
                      <h1>On Progress</h1>
                    </div>
                    <div className="py-[10px]">
                      <h1>Sending Goods</h1>
                    </div>
                    <div className="py-[10px]">
                      <h1>Finish Order</h1>
                    </div>
                  </div>
                  <div className="md:col-span-1 col-span-4 order-1 md:order-2">
                    <div className="flex items-center gap-2 md:gap-0 justify-between text-center bg-[#E8E8E899]/[60%] w-fit py-[22px] px-[10px]">
                      <div>
                        <img
                          src="/public/svg/calender.svg"
                          alt="Calendar"
                          className="w-[12px]"
                        />
                      </div>
                      <p className="text-sm">January 2023</p>
                      <div>
                        <img
                          src="/public/icons/down.webp"
                          alt="down"
                          className="w-[12px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 bg-[#E8E8E899]/[60%] mt-[38px] py-[12px] px-[10px] items-center">
                  <div className="col-span-1 hidden md:block">
                    <img src="/public/image/coffee1.webp" alt="coffee" />
                  </div>
                  <div className="md:col-span-4 col-span-5">
                    <div className="grid grid-cols-4 md:gap-1 gap-6">
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/trash.svg"
                            alt="tsampah"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-sm">No. Order</p>
                        </div>
                        <h2 className="text-sm mt-3 font-bold">#12354-09893</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/calender.svg"
                            alt="Calendar"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Date</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">
                          23 January 2023
                        </h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/refeat.svg"
                            alt="Repeat"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Total</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">Idr 40.000</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img src="/public/svg/process.svg" alt="process" />
                          <p>Status</p>
                        </div>
                        <button className="btn rounded-3xl p-[5px] mt-2 bg-[#FF890633]/[20%] text-primary text-xs font-bold">
                          On Progress
                        </button>
                      </div>
                      <div className="col-span-4">
                        <p className="text-xs whitespace-nowrap mt-4 text-primary underline">
                          Views Order Detail
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 bg-[#E8E8E899]/[60%] mt-[12px] py-[12px] px-[10px] items-center">
                  <div className="col-span-1 hidden md:block">
                    <img src="/public/image/coffee1.webp" alt="coffee" />
                  </div>
                  <div className="md:col-span-4 col-span-5">
                    <div className="grid grid-cols-4 md:gap-1 gap-6">
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/trash.svg"
                            alt="tsampah"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-sm">No. Order</p>
                        </div>
                        <h2 className="text-sm mt-3 font-bold">#12354-09893</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/calender.svg"
                            alt="Calendar"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Date</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">
                          23 January 2023
                        </h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/refeat.svg"
                            alt="Repeat"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Total</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">Idr 40.000</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img src="/public/svg/process.svg" alt="process" />
                          <p>Status</p>
                        </div>
                        <button className="btn rounded-3xl p-[5px] mt-2 bg-[#FF890633]/[20%] text-primary text-xs font-bold">
                          On Progress
                        </button>
                      </div>
                      <div className="col-span-4">
                        <p className="text-xs whitespace-nowrap mt-4 text-primary underline">
                          Views Order Detail
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 bg-[#E8E8E899]/[60%] mt-[12px] py-[12px] px-[10px] items-center">
                  <div className="col-span-1 hidden md:block">
                    <img src="/public/image/coffee1.webp" alt="coffee" />
                  </div>
                  <div className="md:col-span-4 col-span-5">
                    <div className="grid grid-cols-4 md:gap-1 gap-6">
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/trash.svg"
                            alt="tsampah"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-sm">No. Order</p>
                        </div>
                        <h2 className="text-sm mt-3 font-bold">#12354-09893</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/calender.svg"
                            alt="Calendar"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Date</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">
                          23 January 2023
                        </h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/refeat.svg"
                            alt="Repeat"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Total</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">Idr 40.000</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img src="/public/svg/process.svg" alt="process" />
                          <p>Status</p>
                        </div>
                        <button className="btn rounded-3xl p-[5px] mt-2 bg-[#FF890633]/[20%] text-primary text-xs font-bold">
                          On Progress
                        </button>
                      </div>
                      <div className="col-span-4">
                        <p className="text-xs whitespace-nowrap mt-4 text-primary underline">
                          Views Order Detail
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 bg-[#E8E8E899]/[60%] mt-[12px] py-[12px] px-[10px] items-center">
                  <div className="col-span-1 hidden md:block">
                    <img src="/public/image/coffee1.webp" alt="coffee" />
                  </div>
                  <div className="md:col-span-4 col-span-5">
                    <div className="grid grid-cols-4 md:gap-1 gap-6">
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/trash.svg"
                            alt="tsampah"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-sm">No. Order</p>
                        </div>
                        <h2 className="text-sm mt-3 font-bold">#12354-09893</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/calender.svg"
                            alt="Calendar"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Date</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">
                          23 January 2023
                        </h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img
                            src="/public/svg/refeat.svg"
                            alt="Repeat"
                            className="w-[20px] h-[20px]"
                          />
                          <p>Total</p>
                        </div>
                        <h2 className="text-sm mt-2 font-bold">Idr 40.000</h2>
                      </div>
                      <div className="md:col-span-1 col-span-2">
                        <div className="flex gap-1">
                          <img src="/public/svg/process.svg" alt="process" />
                          <p>Status</p>
                        </div>
                        <button className="btn rounded-3xl p-[5px] mt-2 bg-[#FF890633]/[20%] text-primary text-xs font-bold">
                          On Progress
                        </button>
                      </div>
                      <div className="col-span-4">
                        <p className="text-xs whitespace-nowrap mt-4 text-primary underline">
                          Views Order Detail
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mb-4 md:mb-0 justify-center items-center mt-8 w-full">
                  <Paginations />
                </div>
              </div>

              <div className="md:col-span-5 col-span-12">
                <div className="grid grid-cols-1 p-[10px] border border-[#E8E8E8] text-center">
                  <div className="col-span-1 p-[15px]">
                    <img src="/public/icons/message.webp" alt="message" />
                    <h2 className="text-[#4F5665] text-lg font-bold mt-3 text-left">
                      Send Us Message
                    </h2>
                    <p className="font-desc text-[#4F5665] mt-3 text-left">
                      if your unable to find answer or find your product
                      quickly, please describe your problem and tell us. we will
                      give you solution.
                    </p>
                    <button className="btn text-sm font-medium bg-primary w-full mt-3">
                      Send Message
                    </button>
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

export default HistoryOrder;

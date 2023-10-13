import MainLayout from "../components/layouts/MainLayout/MainLayout";
const DetailOrder = () => {
  return (
    <MainLayout bg="bg-[#0B0909] " mt="mt-[90px]">
      <div className="wrapper">
        <div className="container">
          <h1 className="md:font-title font-medium text-2xl pt-2 text-[#0B132A]">
            Order #12354-09893
          </h1>
          <p className="text-base">21 March 2023 at 10:30 AM</p>

          <div className="grid-template mt-[44px] md:mt-[31px]">
            <section className="col-span-12 lg:col-span-5 ">
              <h1 className="w-full font-semibold">Order Information</h1>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2">
                    <div>
                      <img src="../public/icons/icon-name.webp" alt="profile" />
                    </div>
                    <h3 className="text-[#4F5665] text-base">Full name</h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <h2>Ghaluh Wizard Anggoro</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2 items-center">
                    <div>
                      <img src="../public/icons/Location.png" alt="profile" />
                    </div>
                    <h3 className="text-[#4F5665] text-base">Address</h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <h2>Griya bandung indah</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2 items-center">
                    <div>
                      <img src="../public/icons/PhoneCall.webp" alt="profile" />
                    </div>
                    <h3 className="text-[#4F5665] text-base">Phone</h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <h2>082116304338</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2 items-center">
                    <div>
                      <img src="../public/icons/postcard.webp" alt="profile" />
                    </div>
                    <h3 className="text-[#4F5665] text-base">Payment Method</h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <h2>Cash</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2 items-center">
                    <div>
                      <img src="../public/icons/truck.webp" alt="profile" />
                    </div>
                    <h3 className="text-[#4F5665] text-base">Shipping</h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <h2>Dine In</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2 items-center">
                    <div>
                      <img src="../public/icons/process.webp" alt="profile" />
                    </div>
                    <h3 className="text-[#4F5665] text-base">Status</h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <button className="btn bg-[#00A70033]/[20%] text-[#00A700] py-2 px-2 rounded-[24px]">
                      Done
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-[15px] px-[5px] mt-5 border-b border-[#E8E8E8E8]/[90.98%]">
                <div className="flex justify-between w-full">
                  <div className="w-full flex gap-2">
                    <h3 className="text-[#4F5665] text-base">
                      Total Transaksi
                    </h3>
                  </div>
                  <div className="whitespace-nowrap">
                    <h2 className="text-[#FF8906] font-bold">Idr 40.000</h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="col-span-12 lg:col-span-7 ">
              <p className="font-xl font-semibold">Your Order</p>

              <div className="flex bg-light-gray p-[10px] gap-7 items-center mt-[21px] relative">
                <img src="/public/image/coffee1.webp" alt="checkout" />
                <div>
                  <button className="btn py-0 text-white font-sm leading-[24px] whitespace-nowrap px-[10px] rounded-3xl bg-danger">
                    FLASH SALE!
                  </button>
                  <h2 className="mt-4 md:font-xl font-bold font-md">
                    Hazelnut Latte
                  </h2>
                  <p className="mt-4 font-sm md:font-md">
                    2pcs | Regular | Ice | Dine In
                  </p>
                  <div className="mt-4 flex gap-2 items-end">
                    <div className="flex items-center gap-3">
                      <p className="font-sm">
                        <s className="text-danger font-sm md:font-md">
                          IDR 40.000
                        </s>
                      </p>
                      <p className="font-sm md:font-md font-medium text-primary">
                        IDR 20.000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 p-[10px] right-0 clickable">
                  <img src="/public/icons/close.png" alt="close" />
                </div>
              </div>
              <div className="flex bg-light-gray p-[10px] gap-7 items-center mt-[21px] relative">
                <img src="/public/image/coffee1.webp" alt="checkout" />
                <div>
                  <button className="btn py-0 text-white font-sm leading-[24px] whitespace-nowrap px-[10px] rounded-3xl bg-danger">
                    FLASH SALE!
                  </button>
                  <h2 className="mt-4 md:font-xl font-bold font-md">
                    Hazelnut Latte
                  </h2>
                  <p className="mt-4 font-sm md:font-md">
                    2pcs | Regular | Ice | Dine In
                  </p>
                  <div className="mt-4 flex gap-2 items-end">
                    <div className="flex items-center gap-3">
                      <p className="font-sm">
                        <s className="text-danger font-sm md:font-md">
                          IDR 40.000
                        </s>
                      </p>
                      <p className="font-sm md:font-md font-medium text-primary">
                        IDR 20.000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 p-[10px] right-0 clickable">
                  <img src="/public/icons/close.png" alt="close" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailOrder;

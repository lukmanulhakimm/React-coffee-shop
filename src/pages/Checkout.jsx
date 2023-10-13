import MainLayout from "../components/layouts/MainLayout/MainLayout";

const Checkout = () => {
  return (
    <>
      <MainLayout bg="bg-[#0B0909]" mt="mt-[178px]">
        <div className="wrapper">
          <div className="container">
            <h1 className="md:font-title font-medium text-2xl text-[#0B132A]">
              Payment Details
            </h1>

            <div className="grid-template mt-[44px] md:mt-[31px]">
              <section className="col-span-12 lg:col-span-7 order-1 lg:order-1">
                <div className="w-full flex justify-between">
                  <p className="font-xl">Your Order</p>
                  <button className="btn rounded-[6px] font-md font-medium bg-primary">
                    Add Item
                  </button>
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
              <section className="col-span-12 lg:col-span-5 order-3 lg:order-2">
                <div className="py-[10px]">
                  <h2 className="font-xl md:font-xxl">Total</h2>
                </div>
                <div className="flex mt-[8px] items-center py-4 px-5 bg-light-gray">
                  <div className="w-full">
                    <div className="flex justify-between font-xl pb-5">
                      <p className="text-[#4F5665]">Order</p>
                      <p>Idr. 40.000</p>
                    </div>
                    <div className="flex justify-between font-xl pb-5">
                      <p className="text-[#4F5665]">Delivery</p>
                      <p className="font-bold">Idr. 0</p>
                    </div>
                    <div className="flex justify-between font-xl pb-5">
                      <p className="text-[#4F5665]">Tax</p>
                      <p className="font-bold">Idr.4000</p>
                    </div>
                    <div className="border border-solid w-full border-[#E8E8E8] mb-5"></div>
                    <div className="flex justify-between font-xl pb-5">
                      <p className="text-[#4F5665]">Sub Total</p>
                      <p className="font-bold">Idr.44.000</p>
                    </div>
                    <button
                      id="modal-trigger"
                      className="w-full font-semibold btn py-2 rounded-md bg-primary mb-5"
                    >
                      Checkout
                    </button>
                    <p className="text-[#4F5665] font-lg pb-5">We Accept</p>
                    <div className="flex items-center gap-8 justify-around pb-5">
                      <div>
                        <img
                          src="/public/icons/bri.webp"
                          alt="bri"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <img
                          src="/public/icons/dana.webp"
                          alt="dana"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <img
                          src="/public/icons/bca.webp"
                          alt="bca"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <img
                          src="/public/icons/gopay.webp"
                          alt="gopay"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <img
                          src="/public/icons/ovo.webp"
                          alt="ovo"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <img
                          src="/public/icons/paypal.webp"
                          alt="paypal"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-lg text-[#4F5665]">
                        *Get Discount if you pay with Bank Central Asia
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="w-full col-span-12 lg:col-span-7 order-2 lg:order-3">
                <h2 className="font-xxl">Payment & Info Delivery</h2>
                <form className="mt-[39px] font-lg font-semibold">
                  <label htmlFor="fullName">Email</label>
                  <div className="form-control">
                    <span>
                      <img src="/public/icons/mail.webp" alt="iconsHumans" />
                    </span>
                    <input
                      type="text"
                      id="fullName"
                      className="focus-within:input-focus input-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <label htmlFor="email">Full Name</label>
                  <div className="form-control">
                    <span>
                      <img src="/public/icons/icon-name.webp" alt="email" />
                    </span>
                    <input
                      type="text"
                      id="email"
                      placeholder="  Enter Your Full Name"
                      className="input-control focus-within:input-focus"
                    />
                  </div>
                  <label htmlFor="adrress">Adrress</label>
                  <div className="form-control">
                    <span>
                      <img src="/public/icons/Location.png" alt="adrress" />
                    </span>
                    <input
                      type="adrress"
                      id="adrress"
                      placeholder=" Enter Your adrress"
                      className="input-control focus-within:input-focus"
                    />
                    <span>
                      <img src="/public/icons/EyeSlash.webp" alt="eyes" />
                    </span>
                  </div>
                  <label htmlFor="email">Delivery</label>
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
                        <p className="w-full font-lg text-center">Dine in</p>
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
                        <p className="w-full font-lg text-center">
                          Door Delivery
                        </p>
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
                        <p className="w-full font-lg text-center">Pick Up</p>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Checkout;

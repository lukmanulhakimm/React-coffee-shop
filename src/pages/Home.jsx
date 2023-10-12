import Cards from "../components/Cards/Cards";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
const Home = () => {
  return (
    <>
      <MainLayout bg="bg-[#0B0909]/[30%]">
        <section className="md:wrapper w-full min-h-screen relative">
          <div className="md:hidden w-full h-[406px] bg-[url(/public/image/bg-3.webp)] bg-cover bg-center"></div>
          <div className="hidden md:block md:home-gradient min-h-screen w-full"></div>
          <div className="bg-[url(/public/image/bg-3.webp)] bg-cover hidden md:block min-h-screen w-full relative"></div>

          <div className="md:absolute py-[60px] md:py-0 home-gradient md:bg-none text-white md:min-h-screen md:h-full container">
            <div className="w-full md:max-w-[50%] h-full flex flex-col justify-center">
              <div className="max-w-[518px] w-full">
                <h1 className="text-[24px] md:text-3xl lg:text-5xl text-white">
                  Start Your Day with Coffee and Good Meals
                </h1>
                <div className="max-w-[488px] pt-6">
                  <p className="font-desc">
                    We provide high quality beans, good taste, and healthy meals
                    made by love just for you. Start your day with us for a
                    bigger smile!
                  </p>
                </div>
                <button className="btn bg-primary py-2 md:py-4 font-medium px-8 rounded-md text-[#0B132A] mt-6">
                  Get Started
                </button>
                <div className="flex w-full pt-6 gap-10">
                  <div className="border-r-2 w-full">
                    <h1 className="text-[24px] md:text-3xl lg:text-5xl text-primary pb-3">
                      90+
                    </h1>
                    <p className="text-xs md:text-md">Staff</p>
                  </div>
                  <div className="border-r-2 w-full">
                    <h1 className="text-[24px] md:text-3xl lg:text-5xl text-primary pb-3">
                      30+
                    </h1>
                    <div className="text-xs md:text-md">Stores</div>
                  </div>
                  <div className="w-full">
                    <h1 className="text-[24px] md:text-3xl lg:text-5xl text-primary pb-3">
                      800+
                    </h1>
                    <p className="text-xs md:text-md">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper relative">
          <div className="md:container">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:hidden block">
                <img src="/public/image/bg-5.webp" alt="barista" />
              </div>
              <div className="w-full md:w-[50%] pt-[24px] md:pt-14 md:pr-16 px-[16px]">
                <div className="flex items-center gap-6">
                  <div className="w-[7px] h-[68px] bg-primary"></div>
                  <h1 className="font-medium text-5xl">
                    We Provide <span className="text-brown">Good Coffee</span>{" "}
                    and
                    <span className="text-brown">Healthy Meals</span>
                  </h1>
                </div>
                <div className="text-md text-[#4F5665] pt-6">
                  <p>
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                </div>
                <div className="pt-6 pb-14">
                  <div className="flex gap-2 font-md text-[#4F5665]">
                    <img src="/public/icons/cklis.webp" alt="checklis" />
                    <p>High quality beans</p>
                  </div>
                  <div className="flex items-center gap-2 font-md text-[#4F5665]">
                    <img src="/public/icons/cklis.webp" alt="checklis" />
                    <p>Healthy meals, you can request the ingredients</p>
                  </div>
                  <div className="flex items-center gap-2 font-md text-[#4F5665]">
                    <img src="/public/icons/cklis.webp" alt="checklis" />
                    <p>
                      Chat with our staff to get better experience for ordering
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-md text-[#4F5665]">
                    <img src="/public/icons/cklis.webp" alt="checklis" />
                    <p>
                      Free member card with a minimum purchase of IDR 200.000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute hidden md:block right-0 w-[50%] top-0 h-full bg-[url('/public/image/bg-5.webp')] bg-cover"></div>
          </div>
        </section>
        <div className="flex justify-center items-center text-2xl md:text-5xl font-medium md:pt-20 pt-2">
          <h1>
            Here is People’s <span className="text-brown">Favorite</span>
          </h1>
        </div>
        <div className="flex justify-center pt-4 md:pt-6">
          <div className="w-[68px] h-[7px] bg-primary"></div>
        </div>
        <div className="text-center pt-4 md:pt-6 font-lg text-[#4F5665] md:pb-[60px] pb-4">
          <p>
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="grid-template">
              <div className="col-span-6 md:col-span-3">
                <Cards imagePath="/public/image/image-1.webp" />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Cards imagePath="/public/image/image-2.webp" />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Cards imagePath="/public/image/image-3.webp" />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Cards imagePath="/public/image/image-4.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="text-center section-title-text font-medium w-full pt-20 md:pt-36 text-[#0B132A]">
              <p>
                <span className="text-brown">Visit Our People</span> in The Spot
                on The Map Below
              </p>
            </div>
            <div className="flex justify-center py-2 md:py-6">
              <div className="w-[68px] h-[7px] bg-primary"></div>
            </div>
            <div>
              <p className="font-lg text-center">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
            </div>
            <div className="w-full md:mt-[60px] mt-4">
              <img src="/public/image/map.webp" alt="Map" />
            </div>
          </div>
        </div>
        <div className="home-gradient">
          <div className="wrapper">
            <div className="container py-[76px]">
              <h1 className="md:hidden block text-center text-white font-lg pb-6">
                TESTIMONIAL
              </h1>
              <div className="grid-template">
                <div className="col-span-12 md:col-span-6">
                  <img
                    src="/public/image/foto2.webp"
                    alt="Manager"
                    className="w-full"
                  />
                </div>
                <div className="text-white col-span-12 md:col-span-6">
                  <h1 className="hidden md:block font-lg pb-6">TESTIMONIAL</h1>
                  <div className="flex pb-6 items-center pt-4">
                    <div className="md:w-[7px] md:h-[68px] w-[3px] h-[30px] bg-primary"></div>
                    <h1 className="text-2xl md:font-title pl-5">
                      Viezh Robert
                    </h1>
                  </div>
                  <h2 className="text-primary font-lg">Manager Coffe Shop</h2>
                  <p className="font-desc pt-[25px]">
                    “Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!
                  </p>
                  <div className="flex gap-6 pt-[25px] items-center">
                    <img src="/public/icons/bintang.webp" alt="bintang" />
                    <img src="/public/icons/bintang.webp" alt="bintang" />
                    <img src="/public/icons/bintang.webp" alt="bintang" />
                    <img src="/public/icons/bintang.webp" alt="bintang" />
                    <img src="/public/icons/bintang.webp" alt="bintang" />
                    <div className="font-lg">
                      <p>5.0</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-[25px]">
                    <button className="rounded-full bg-white p-4">
                      <img
                        src="/public/icons/arrow-left.webp"
                        alt="arrow-left"
                      />
                    </button>
                    <button className="rounded-full bg-primary p-4">
                      <img
                        src="/public/icons/arrow-right.webp"
                        alt="arrow-right"
                      />
                    </button>
                  </div>
                  <div className="flex gap-2 pt-[25px]">
                    <div className="bg-primary rounded-lg w-[25px] h-[8.44px]"></div>
                    <div className="rounded-full bg-white w-2 h-2"></div>
                    <div className="rounded-full bg-white w-2 h-2"></div>
                    <div className="rounded-full bg-white w-2 h-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center btn rounded-full w-[80px] h-[80px] clickable cursor-pointer bg-primary fixed bottom-[90px] right-11 z-20">
          <img src="/public/icons/chats.webp" alt="chats" />
        </button>
      </MainLayout>
    </>
  );
};

export default Home;

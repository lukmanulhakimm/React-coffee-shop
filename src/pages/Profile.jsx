import Input from "../components/Forms/Input";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
const Profile = () => {
  return (
    <>
      <MainLayout bg="bg-[#0B0909]">
        <div className="wrapper mt-[118px] ">
          <div className="container">
            <h1 className="md:font-title text-2xl text-[#0B132A] ">Profile</h1>
            <div className="grid-template mt-[27px] md:mt-[44px]">
              <section className="col-span-12 md:col-span-3">
                <div className="shadow-sm border-light-gray p-5 flex flex-col justify-center gap-4 items-center w-full">
                  <div className="text-center">
                    <h1 className="font-lg font-semibold">Ghaluh Wizard</h1>
                    <p className="font-lg">ghaluhwizz@gmail.com</p>
                  </div>
                  <div className="">
                    <img src="/public/image/foto.webp" alt="Profile" />
                  </div>
                  <div className="">
                    <button className="btn bg-primary">
                      <h2 className="font-md font-semibold">
                        Upload New Photo
                      </h2>
                    </button>
                  </div>
                  <div className="">
                    <h2 className="font-lg font-medium">
                      Since{" "}
                      <span className="font-semibold">20 January 2022</span>
                    </h2>
                  </div>
                </div>
              </section>
              <section className="col-span-12 md:col-span-9  border-light-gray p-5">
                <div className="flex justify-center w-full">
                  <form className="font-lg font-semibold w-full">
                    <Input
                      for="fullName"
                      title="Full Name"
                      imagePath="/public/icons/icon-name.webp"
                      imageAlt="full name"
                      type="text"
                      id="fullName"
                      placeholder="Enter Your Full Name"
                    />
                    <Input
                      for="email"
                      title="Email"
                      imagePath="/public/icons/mail.webp"
                      imageAlt="email"
                      type="text"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <Input
                      for="phone"
                      title="Phone"
                      imagePath="/public/icons/PhoneCall.webp"
                      imageAlt="phone"
                      type="text"
                      id="phone"
                      placeholder="Enter Your phone"
                    />
                    <Input
                      for="password"
                      title="Password"
                      imagePath="/public/icons/Password.webp"
                      imageAlt="password"
                      type="password"
                      id="password"
                      placeholder="*******"
                      isIconEye={true}
                    />

                    <Input
                      for="address"
                      title="Address"
                      imagePath="/public/icons/Location.png"
                      imageAlt="address"
                      type="text"
                      id="address"
                      placeholder="Griya Bandung Indah"
                    />
                    <button className="btn w-full mt-6 bg-primary font-md py-[15px] cursor-pointer text-black">
                      <a href="#" className="font-medium font-lg clickable">
                        Submit
                      </a>
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Profile;

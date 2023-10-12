import MainLayout from "../components/layouts/MainLayout/MainLayout"
const Profile = () => {
  return (
    <>
    <MainLayout bg="bg-[#0B0909]">
      <div className="wrapper mt-[118px] ">
        <div className="container">
    <h1 className="md:font-title text-2xl text-[#0B132A] ">Profile</h1>
          <div className="grid-template mt-[27px] md:mt-[44px]">
            <section className="col-span-12 md:col-span-3">
              <div
                className="shadow-sm border-light-gray p-5 flex flex-col justify-center gap-4 items-center w-full"
              >
                <div className="text-center">
                  <h1 className="font-lg font-semibold">Ghaluh Wizard</h1>
                  <p className="font-lg">ghaluhwizz@gmail.com</p>
                </div>
                <div className="">
                  <img src="/public/image/foto.webp" alt="Profile" />
                </div>
                <div className="">
                  <button className="btn bg-primary">
                    <h2 className="font-md font-semibold">Upload New Photo</h2>
                  </button>
                </div>
                <div className="">
                  <h2 className="font-lg font-medium">
                    Since <span className="font-semibold">20 January 2022</span>
                  </h2>
                </div>
              </div>
            </section>
            <section
              className="col-span-12 md:col-span-9  border-light-gray p-5"
            >
              <div className="flex justify-center w-full">
                <form className="font-lg font-semibold w-full">
                  <label htmlFor="fullName">Full name</label>
                  <div className="form-control">
                    <span
                      ><img
                        src="/public/icons/icon-name.webp"
                        alt="iconsHumans"
                    /></span>
                    <input
                      type="text"
                      id="fullName"
                      className="focus-within:input-focus input-control"
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  <label htmlFor="email">Email</label>
                  <div className="form-control">
                    <span
                      ><img src="/public/icons/mail.webp" alt="email"
                    /></span>
                    <input
                      type="text"
                      id="email"
                      placeholder="  Enter Your Email"
                      className="input-control focus-within:input-focus"
                    />
                  </div>
                  <label htmlFor="phone">Phone</label>
                  <div className="form-control">
                    <span
                      ><img src="/public/icons/PhoneCall.webp" alt="phone"
                    /></span>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter Your phone"
                      className="input-control focus-within:input-focus"
                    />
                  </div>
                  <label htmlFor="password">Password</label>
                  <div className="form-control">
                    <span
                      ><img src="/public/icons/Password.webp" alt="password"
                    /></span>
                    <input
                      type="password"
                      id="password"
                      placeholder="*******"
                      className="input-control focus-within:input-focus"
                    />
                    <span
                      ><img src="/public/icons/EyeSlash.webp" alt="eyes"
                    /></span>
                  </div>
                  <label htmlFor="address">Address</label>
                  <div className="form-control">
                    <span
                      ><img src="/public/icons/Location.png " alt="address"
                    /></span>
                    <input
                      type="text"
                      id="address"
                      placeholder="Griya Bandung Indah"
                      className="input-control input-focus"
                    />
                    <span
                      ><img src="/public/icons/EyeSlash.webp" alt="eyes"
                    /></span>
                  </div>
                  <button
                    className="btn w-full mt-6 bg-primary font-md py-[15px] cursor-pointer text-black"
                  >
                    <a href="#" className="font-medium font-lg clickable">Submit</a>
                  </button>
                </form>
              </div>
            </section>
          </div>
          </div>
          </div>
    </MainLayout>
    
    </>
  )
}

export default Profile
const Register = () => {
  return (
    <>
      <main className="wrapper w-full">
        <div className="grid-template w-full">
          <div className="md:block col-span-4 hidden h-screen max-h-full bg-center sticky top-0 bg-[url('/public/image/backgorund-1.webp')] bg-cover bg-no-repeat"></div>
          <div className="md:col-span-8 col-span-12 container md:pl-[38px] md:pr-[130px] py-[32px] md:max-w-full">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <img
                  src="/public/icons/coffee.webp"
                  alt="coffee"
                  className="text-brown"
                />
                <h2 className="font-bold text-lg block py-6 text-brown font-sacramento">
                  Coffee Shop
                </h2>
              </div>
              <h1 className="text-brown font-xxl pb-5">Register</h1>
              <p className="font-md">Fill out the form correctly</p>
              <form className="mt-5 font-lg font-semibold">
                <label htmlFor="fullName">Full name</label>
                <div className="form-control">
                  <span>
                    <img src="/public/icons/icon-name.webp" alt="iconsHumans" />
                  </span>
                  <input
                    type="text"
                    id="fullName"
                    className="focus-within:input-focus input-control"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <label htmlFor="email">Email</label>
                <div className="form-control">
                  <span>
                    <img src="/public/icons/mail.webp" alt="email" />
                  </span>
                  <input
                    type="text"
                    id="email"
                    placeholder="  Enter Your Email"
                    className="input-control focus-within:input-focus"
                  />
                </div>
                <label htmlFor="password">Password</label>
                <div className="form-control">
                  <span>
                    <img src="/public/icons/Password.webp" alt="password" />
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder=" Enter Your Password"
                    className="input-control focus-within:input-focus"
                  />
                  <span>
                    <img src="/public/icons/EyeSlash.webp" alt="eyes" />
                  </span>
                </div>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <div className="form-control">
                  <span>
                    <img src="/public/icons/Password.webp" alt="password" />
                  </span>
                  <input
                    type="password"
                    id="ConfirmPassword"
                    placeholder="Enter Your Password Again"
                    className="input-control input-focus"
                  />
                  <span>
                    <img src="/public/icons/EyeSlash.webp" alt="eyes" />
                  </span>
                </div>
                <button className="btn w-full mt-6 bg-primary font-md py-[15px] cursor-pointer text-black">
                  <a href="" className="font-medium font-lg clickable">
                    Register
                  </a>
                </button>
              </form>
              <div className="wrapper">
                <div className="pt-5">
                  <p className="font-lg text-[#4F5665]">
                    Have An Account?
                    <a
                      href="/login/index.html"
                      className="text-primary clickable"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center gap-3 mt-16">
                <button className="flex w-[23.938rem] justify-center items-center rounded-md shadow py-5">
                  <img
                    src="/public/icons/bx_bxl-facebook-circle.webp"
                    alt="facebook"
                  />
                  <h2>Facebook</h2>
                </button>
                <button className="flex w-[23.938rem] justify-center items-center rounded-md shadow py-5">
                  <img src="/public/icons/google.webp" alt="facebook" />
                  <h2>Google</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;

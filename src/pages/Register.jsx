import Input from "../components/Forms/Input";
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
                <Input
                  for="fullName"
                  title="Full Name"
                  imagePath="/public/icons/mail.webp"
                  imageAlt="email"
                  type="text"
                  id="email"
                  placeholder="Enter Your Name"
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
                  for="password"
                  title="Password"
                  imagePath="/public/icons/Password.webp"
                  imageAlt="password"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  isIconEye={true}
                />
                <Input
                  for="password"
                  title="Confirm Password"
                  imagePath="/public/icons/Password.webp"
                  imageAlt="password"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password Again"
                  isIconEye={true}
                />
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

import { Link } from "react-router-dom";
import Input from "../components/Forms/Input";

const ForgotPassword = () => {
  return (
    <>
      <main className="wrapper w-full">
        <div className="grid-template w-full">
          <div className="md:block col-span-4 hidden h-screen max-h-full sticky bg-center top-0 bg-[url('/public/image/bg-6.webp')] bg-cover bg-no-repeat"></div>
          <div className="md:col-span-8 flex items-center col-span-12 container md:max-w-full md:pl-[38px] md:pr-[130px] py-[32px]">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <img
                  src="/public/icons/coffee.webp"
                  alt="coffee"
                  className=" bg-cover "
                />
                <h2 className="font-bold text-lg block py-6 text-brown font-sacramento ">
                  Coffee Shop
                </h2>
              </div>
              <h1 className="text-brown font-xxl pb-5">
                Fill out the form correctly
              </h1>
              <p className="text-base text-[#4F5665]">
                We will send new password to your email
              </p>
              <form className="mt-5 font-lg font-semibold">
                <Input
                  for="email"
                  title="Email"
                  imagePath="/public/icons/mail.webp"
                  imageAlt="email"
                  type="text"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <button className="btn w-full bg-primary font-md py-[15px] cursor-pointer text-black">
                  <Link htmlFor="" className="font-medium font-lg clickable">
                    Login{" "}
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;

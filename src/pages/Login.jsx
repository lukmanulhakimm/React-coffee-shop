import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Forms/Input";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [isPwdShow, setIsPwdShow] = useState(false);
  const showPwdHandler = () => {
    setIsPwdShow((state) => !state);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("okeee");
    const body = {
      email: e.target["user-email"].value,
      clientPassword: e.target.pwd.value,
    };
    const url = "http://localhost:8000/auth";

    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/product");
      })
      .catch((err) => {
        toast.error("Wrong Username / password");
      });
  };
  return (
    <>
      <Toaster />
      <main className="wrapper w-full">
        <div className="grid-template w-full">
          <div className="md:block col-span-4 hidden h-screen max-h-full sticky bg-center top-0 bg-[url('/public/image/bg-2.webp')] bg-cover bg-no-repeat"></div>
          <div className="md:col-span-8 col-span-12 container md:max-w-full md:pl-[38px] md:pr-[130px] py-[32px]">
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
              <h1 className="text-brown font-xxl pb-5">Login</h1>
              <p className="font-md">Fill out the form correctly</p>
              <form
                className="mt-5 font-lg font-semibold"
                onSubmit={submitHandler}
              >
                <Input
                  for="email"
                  name="user-email"
                  title="Email"
                  imagePath="/public/icons/mail.webp"
                  imageAlt="email"
                  type="text"
                  id="user-email"
                  placeholder="Enter Your Email"
                />
                <Input
                  for="password"
                  name="pwd"
                  title="Password"
                  imagePath="/public/icons/Password.webp"
                  imageAlt="password"
                  type={isPwdShow ? "text" : "password"}
                  id="pwd"
                  placeholder="Enter Your Password"
                  isIconEye={true}
                />
                <div className="cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="show-pwd"
                    className="cursor-pointer select-none"
                    value={isPwdShow}
                    onChange={showPwdHandler}
                  />
                  <label
                    htmlFor="show-pwd"
                    className="cursor-pointer select-none ml-2"
                  >
                    Show password
                  </label>
                </div>
                <p className="w-full flex justify-end py-6 text-primary cursor-pointer">
                  Lupa Password?
                </p>
                <button
                  className="btn w-full font-medium font-lg bg-primary font-md py-[15px] cursor-pointer text-black"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <div className="wrapper">
                <div className="pt-5">
                  <p className="font-lg text-[#4F5665]">
                    Have An Account?
                    <a
                      href="/register/index.html"
                      className="text-primary cursor-pointer"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center gap-8 md:gap-3 mt-16">
                <button className="flex w-full justify-center items-center rounded-md gap-5 shadow py-5">
                  <img
                    src="/public/icons/bx_bxl-facebook-circle.webp"
                    alt="facebook"
                  />
                  <h2>Facebook</h2>
                </button>
                <button className="flex w-full justify-center items-center rounded-md gap-5 shadow py-5">
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

export default Login;

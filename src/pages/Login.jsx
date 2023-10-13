const Login = () => {
  return (
    <>
      <main class="wrapper w-full">
        <div class="grid-template w-full">
          <div class="md:block col-span-4 hidden h-screen max-h-full sticky bg-center top-0 bg-[url('/public/image/bg-2.webp')] bg-cover bg-no-repeat"></div>
          <div class="md:col-span-8 col-span-12 container md:max-w-full md:pl-[38px] md:pr-[130px] py-[32px]">
            <div class="w-full">
              <div class="flex items-center gap-4">
                <img
                  src="/public/icons/coffee.webp"
                  alt="coffee"
                  class="text-brown"
                />
                <h2 class="font-bold text-lg block py-6 text-brown font-sacramento">
                  Coffee Shop
                </h2>
              </div>
              <h1 class="text-brown font-xxl pb-5">Login</h1>
              <p class="font-md">Fill out the form correctly</p>
              <form class="mt-5 font-lg font-semibold">
                <label for="email">Email</label>
                <div class="form-control">
                  <span>
                    <img src="/public/icons/mail.webp" alt="email" />
                  </span>
                  <input
                    type="text"
                    id="email"
                    placeholder="  Enter Your Email"
                    class="input-control focus-within:input-focus"
                  />
                </div>
                <label for="password">Password</label>
                <div class="form-control">
                  <span>
                    <img src="/public/icons/Password.webp" alt="password" />
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder=" Enter Your Password"
                    class="input-control focus-within:input-focus"
                  />
                  <span>
                    <img src="/public/icons/EyeSlash.webp" alt="eyes" />
                  </span>
                </div>
                <p class="w-full flex justify-end py-6 text-primary">
                  Lupa Password?
                </p>
                <button class="btn w-full bg-primary font-md py-[15px] cursor-pointer text-black">
                  <a href="" class="font-medium font-lg clickable">
                    Login
                  </a>
                </button>
              </form>
              <div class="wrapper">
                <div class="pt-5">
                  <p class="font-lg text-[#4F5665]">
                    Have An Account?
                    <a
                      href="/register/index.html"
                      class="text-primary cursor-pointer"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </div>
              <div class="flex w-full justify-center items-center gap-8 md:gap-3 mt-16">
                <button class="flex w-full justify-center items-center rounded-md gap-5 shadow py-5">
                  <img
                    src="/public/icons/bx_bxl-facebook-circle.webp"
                    alt="facebook"
                  />
                  <h2>Facebook</h2>
                </button>
                <button class="flex w-full justify-center items-center rounded-md gap-5 shadow py-5">
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

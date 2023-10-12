const Footer = () => {
  return (
    <>
    <footer className="wrapper mt-24 bg-light-gray py-[50px]">
      <div className="container">
        <div className="grid-template">
          <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4">
            <div className="flex items-center gap-4">
              <img src="/public/icons/coffee.webp" alt="coffee" />
              <h2
                className="font-bold text-lg block py-6 text-brown font-sacramento"
              >
                Coffe Shop
              </h2>
            </div>
            <p className="font-lg pb-8 font-md">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
            <p className="font-lg font-rubik">©2020CoffeeStore</p>
          </div>
          <div
            className="col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 font-md"
          >
            <h2 className="font-xl pb-3">Product</h2>
            <p className="pb-3 clickable">Our Product</p>
            <p className="pb-3 clickable">Princing</p>
            <p className="pb-3 clickable">Location</p>
            <p className="pb-3 clickable">Countries</p>
            <p className="pb-3 clickable">Blog</p>
          </div>
          <div
            className="col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 font-md"
          >
            <h2 className="font-xl pb-3">Engage</h2>
            <p className="pb-3 clickable">Partner</p>
            <p className="pb-3 clickable">FAQ</p>
            <p className="pb-3 clickable">About Us</p>
            <p className="pb-3 clickable">Privacy Policy</p>
            <p className="pb-3 clickable">Terms of Service</p>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-4 xl:col-span-4">
            <h2 className="font-xl pb-6">Social Media</h2>
            <div className="flex gap-5">
              <img
                src="/public/icons/facebook.webp"
                alt="facebook"
                className="bg-black rounded-full clickable"
              />
              <img
                src="/public/icons/twitter.webp"
                alt="twitter"
                className="bg-black rounded-full clickable"
              />
              <img
                src="/public/icons/instagram.webp"
                alt="instagram"
                className="bg-black rounded-full clickable"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Footer
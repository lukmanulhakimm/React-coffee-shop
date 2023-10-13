const Paginations = () => {
  return (
    <>
      <button className="btn rounded-full bg-primary px-4 text-base font-medium">
        1
      </button>
      <button className="btn rounded-full bg-light-gray px-4 text-base font-medium">
        2
      </button>
      <button className="btn rounded-full bg-light-gray px-4 text-base font-medium">
        3
      </button>
      <button className="btn rounded-full bg-light-gray px-4 text-base font-medium">
        4
      </button>
      <button className="btn rounded-full w-10 h-10 bg-primary p-0">
        <img src="/public/icons/arrow-right2.webp" alt="arrow-right" />
      </button>
    </>
  );
};

export default Paginations;

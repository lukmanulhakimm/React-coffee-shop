const ModalLogout = (props) => {
  return (
    <>
      <div
        id="modal"
        className={` ${
          props.open ? "" : "hidden"
        }  flex h-screen w-screen bg-black/30 fixed z-[9999] top-0 items-center justify-center`}
      >
        <div className="max-w-[400px] flex flex-col gap-2 w-full rounded-md bg-white py-2">
          <h2 className="text-xl font-bold py-1 px-2">{props.confrimModal}</h2>
          <div className="w-full h-[1px] bg-dark-gray/40"></div>
          <p className="py-1 px-2">{props.desc}</p>
          <div className="w-full h-[1px] bg-dark-gray/40"></div>
          <div className="flex justify-end gap-2 px-2">
            <button
              className="btn  font-semibold bg-primary"
              id="modal-confirm-btn"
              onClick={() => {
                if (props.open === true) {
                  props.setOpen(false);
                } else {
                  props.setOpen(true);
                }
              }}
            >
              Confirm
            </button>
            <button
              className="btn border  font-semibold"
              id="modal-cancel-btn"
              onClick={() => {
                if (props.open === true) {
                  props.setOpen(false);
                } else {
                  props.setOpen(true);
                }
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogout;

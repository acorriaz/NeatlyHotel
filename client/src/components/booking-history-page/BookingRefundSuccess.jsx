function BookingRefundSuccess () {
    return (
      <>
        <div className="w-full p-20 mt-16 flex justify-center items-center">
          <div className="w-1/2 flex flex-col">
            <div className="w-6/7 h-[190px] text-center bg-green800 rounded-t-md">
              <h1 className="headline3 text-5xl text-utilWhite font-['noto-serif'] mx-6 mt-10 mb-2">
                Your Request has been Submitted
              </h1>
              <p className="body2 text-green400 mx-6 mb-10">
                The cancellation is complete. <br />
                You will recieve an email with a detail and refund within 48
                hours.
              </p>
            </div>
            <div className="bg-green700 rounded-b-md">
              <div className="w-6/7 h-[255px] mx-8 mt-6 mb-8 p-6 bg-green600 rounded-md">
                <h1 className="headline5 text-utilWhite mb-6">
                  Superior Garden View
                </h1>
                <div className="text-utilWhite font-inter mb-12">
                  <span className="font-fontWeight6">Th, 19 Oct 2022</span>
                  <span className="font-fontWeight4">
                    - Fri, 20 Oct 2022 <br /> 2 Guests
                  </span>
                </div>
                <div className="body1 text-green300">
                  <p>Booking date: Tue, 16 Oct 2022</p>
                  <p>Cancellation date: Tue, 16 Oct 2022</p>
                </div>
              </div>
              <div className="w-6/7 h-[55px] mx-8 mb-14 flex justify-between items-end">
                <span className="text-green300">Total Refund</span>
                <span className="headline5 text-utilWhite">THB 2,300.00</span>
              </div>
            </div>
            <div className="w-full flex justify-center items-center font-sans font-fontWeight6">
              <button className="w-44 h-12 bg-orange600 text-utilWhite rounded-md mt-12">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default BookingRefundSuccess;
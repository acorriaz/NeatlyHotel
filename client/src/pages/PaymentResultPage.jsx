import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function PaymentResultPage() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="flex justify-center items-center h-screen mt-10 bg-gray300">
        <section className="max-w-[738px]">
          <section className="text-center bg-green800 py-9 px-14">
            <h2 className="headline3 text-utilWhite">Thank you for booking</h2>
            <p className="body2 text-green400 px-1 mt-4">
              We are looking forward to hosting you at our place.<br></br> We
              will send you more information about check-in and staying at our
              Neatly closer to your date of reservation
            </p>
          </section>

          <section className="flex flex-col w-full bg-green700 px-7 pt-4 pb-7">
            <div className="flex justify-between bg-green600 my-2 p-6 rounded text-body1 text-utilWhite">
              <article>
                <p className="font-fontWeight6">
                  Th, 19 Oct 2022 - Fri, 20 Oct 2022
                </p>
                <p className="font-fontWeight4">2 Guests</p>
              </article>

              <div className="flex gap-10">
                <article>
                  <p className="font-fontWeight6">Check-in</p>
                  <p className="font-fontWeight4">After 2:00 PM</p>
                </article>
                <article>
                  <p className="font-fontWeight6">Check-out</p>
                  <p className="font-fontWeight">Before 12:00 PM</p>
                </article>
              </div>
            </div>
            <div className="flex justify-end my-10 gap-x-5">
              <p className="text-green300">Payment success via</p>
              <p className="text-green300 font-fontWeight6">
                Credit Card - *888
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-5">
                <p className="body1 text-green300">Superior Garden View Room</p>
                <p className="text-body1 text-utilWhite">2,500</p>
              </div>
              <div className="flex justify-between mb-5">
                <p className="body1 text-green300">Airport transter</p>
                <p className="text-body1 text-utilWhite">200</p>
              </div>
              <hr></hr>
              <div className="flex justify-between mt-5">
                <p className="body1 text-green300">Total</p>
                <p className="headline text-utilWhite">THB 2,700.00</p>
              </div>
            </div>
          </section>

          <section className="flex justify-center mt-10 gap-x-10">
            <button className="text-body1 font-fontWeight6 text-orange500 pb-4">
              Check Booking Detail
            </button>
            <button
              className="btn w-1/4  bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4"
              onClick={() => navigate("/hotel")}
            >
              Back to Home
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default PaymentResultPage;

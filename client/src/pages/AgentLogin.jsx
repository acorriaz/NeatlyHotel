import NavBar from "../components/Navbar.jsx";
import InputStyle from "../components/InputStyle.jsx";
const Login = () => {
  return (
    <div className="w-full relative bg-green-700 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <main className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full text-left text-49xl text-green-800 font-headline2 mq1125:flex-wrap">
        <img
          className="w-[708px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[924px] max-w-full mq1125:flex-1"
          loading="eager"
          alt=""
          src="src/assets/Frame 427320921.png"
        />
        <div className="flex-1 bg-utility-bg overflow-hidden flex flex-row items-start justify-start py-[150px] pr-40 pl-[120px] box-border min-w-[476px] min-h-[924px] max-w-full mq750:pl-[60px] mq750:pr-20 mq750:box-border mq750:min-w-full mq1125:min-h-[auto] mq450:py-[63px] mq450:px-5 mq450:box-border mq1050:pt-[97px] mq1050:pb-[97px] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full mq450:gap-[30px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[125%] font-large font-inherit whitespace-nowrap mq450:text-[41px] mq450:leading-[51px] mq1050:text-[54px] mq1050:leading-[68px] text-8xl">
              Log In
            </h1>
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
              <InputStyle
                email="Username or Email"
                containerInputPlaceholder="Enter your username or email"
              />
              <InputStyle
                email="Password"
                containerInputPlaceholder="Enter your password"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <button className="cursor-pointer [border:none] py-4 px-8 bg-orange-600 self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate">
                  <div className="relative text-base leading-[16px] font-semibold font-open-sans text-utility-white text-center">
                    Log In
                  </div>
                </button>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative text-base tracking-[-0.02em] leading-[150%] font-body1 text-gray-400 text-left">
                    Dont have an account yet?
                  </div>
                  <button className="cursor-pointer [border:none] py-1 px-2 bg-[transparent] flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative text-base leading-[16px] font-semibold font-open-sans text-orange-500 text-center">
                      Register
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;

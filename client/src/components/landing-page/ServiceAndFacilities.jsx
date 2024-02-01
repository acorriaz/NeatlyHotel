export default function ServiceAndFacilities() {
  return (
    <div
      id="services"
      className="m-auto w-screen pt-[100px] pb-[120px] bg-green700 text-white text-center"
    >
      <h1 className="mb-[72px] text-[4.25rem] font-noto-serif">
        Service & Facilities
      </h1>
      <div className="m-auto max-w-[1120px] flex justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M47.574 24.1514C47.324 24.2052 43.968 24.984 39.668 27.685C39.022 24.5637 37.11 18.7195 31.452 12.7758L30 11.25L28.548 12.7778C22.87 18.7434 20.966 24.6036 20.326 27.7447C16.01 24.9979 12.68 24.2092 12.436 24.1534L10 23.6116V26.0975C10 40.6183 17.85 50 30 50C41.962 50 50 40.3952 50 26.0975V23.6235L47.574 24.1514ZM23.998 30.1569C24.002 30.0912 24.302 23.9821 30 17.146C35.628 23.9183 35.998 30.0812 36 30.0812V30.3302C33.7571 32.1865 31.7371 34.2946 29.98 36.6126C28.218 34.3355 26.2121 32.2563 23.998 30.4119V30.1569ZM30 46.0162C19.368 46.0162 14.902 37.6583 14.126 28.9578C17.436 30.388 23.358 33.7901 28.34 41.1541L30.022 43.6419L31.672 41.1322C36.524 33.7463 42.522 30.3541 45.864 28.9379C45.068 37.3595 40.608 46.0162 30 46.0162Z"
              fill="white"
            />
          </svg>
          <p>Spa</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M17.2727 28.2127H42.7273V24.6415H17.2727V28.2127ZM17.2727 31.7838V34.4622C17.2727 35.7518 17.5314 37.0289 18.0339 38.2204C18.5365 39.4119 19.2731 40.4945 20.2016 41.4065C21.1302 42.3184 22.2326 43.0418 23.4459 43.5354C24.6591 44.0289 25.9595 44.2829 27.2727 44.2829H32.7273C34.0405 44.2829 35.3409 44.0289 36.5541 43.5354C37.7674 43.0418 38.8698 42.3184 39.7984 41.4065C40.7269 40.4945 41.4635 39.4119 41.9661 38.2204C42.4686 37.0289 42.7273 35.7518 42.7273 34.4622V31.7838H17.2727ZM15.4545 21.0703H44.5455C44.7842 21.0703 45.0207 21.1165 45.2413 21.2062C45.4619 21.2959 45.6623 21.4275 45.8311 21.5933C46 21.7591 46.1339 21.9559 46.2253 22.1726C46.3166 22.3892 46.3637 22.6214 46.3636 22.8559V34.4622C46.3636 38.0139 44.927 41.4202 42.3696 43.9317C39.8123 46.4431 36.3439 47.8541 32.7273 47.8541H27.2727C23.6561 47.8541 20.1877 46.4431 17.6304 43.9317C15.073 41.4202 13.6364 38.0139 13.6364 34.4622V22.8559C13.6363 22.6214 13.6834 22.3892 13.7747 22.1726C13.8661 21.9559 14 21.7591 14.1689 21.5933C14.3377 21.4275 14.5381 21.2959 14.7587 21.2062C14.9793 21.1165 15.2158 21.0703 15.4545 21.0703ZM30 5C30.2388 5 30.4752 5.04619 30.6958 5.13592C30.9164 5.22566 31.1168 5.35719 31.2857 5.523C31.4545 5.68881 31.5884 5.88566 31.6798 6.1023C31.7712 6.31894 31.8182 6.55113 31.8182 6.78562V15.7135C31.8182 16.1871 31.6266 16.6412 31.2856 16.9761C30.9447 17.311 30.4822 17.4991 30 17.4991C29.5178 17.4991 29.0553 17.311 28.7144 16.9761C28.3734 16.6412 28.1818 16.1871 28.1818 15.7135V6.78562C28.1818 6.55113 28.2289 6.31894 28.3202 6.1023C28.4116 5.88566 28.5455 5.68881 28.7143 5.523C28.8832 5.35719 29.0836 5.22566 29.3042 5.13592C29.5248 5.04619 29.7612 5 30 5ZM22.7273 8.57119C23.2095 8.57119 23.672 8.75931 24.0129 9.09417C24.3539 9.42903 24.5455 9.8832 24.5455 10.3568V15.7135C24.5455 16.1871 24.3539 16.6413 24.0129 16.9761C23.6719 17.311 23.2095 17.4991 22.7273 17.4991C22.245 17.4991 21.7826 17.311 21.4416 16.9761C21.1006 16.6413 20.9091 16.1871 20.9091 15.7135V10.3568C20.9091 10.1223 20.9561 9.89008 21.0475 9.67344C21.1388 9.4568 21.2728 9.25996 21.4416 9.09415C21.6105 8.92835 21.8109 8.79682 22.0315 8.70709C22.2521 8.61736 22.4885 8.57118 22.7273 8.57119ZM37.2727 8.57119C37.5115 8.57118 37.7479 8.61736 37.9685 8.70709C38.1891 8.79682 38.3895 8.92835 38.5584 9.09415C38.7272 9.25996 38.8612 9.4568 38.9525 9.67344C39.0439 9.89008 39.0909 10.1223 39.0909 10.3568V15.7135C39.0909 16.1871 38.8994 16.6413 38.5584 16.9761C38.2174 17.311 37.755 17.4991 37.2727 17.4991C36.7905 17.4991 36.3281 17.311 35.9871 16.9761C35.6461 16.6413 35.4545 16.1871 35.4545 15.7135V10.3568C35.4545 9.8832 35.6461 9.42903 35.9871 9.09417C36.328 8.75931 36.7905 8.57119 37.2727 8.57119ZM11.8182 51.4288H48.1818C48.664 51.4288 49.1265 51.6169 49.4675 51.9518C49.8084 52.2867 50 52.7408 50 53.2144C50 53.688 49.8084 54.1421 49.4675 54.477C49.1265 54.8119 48.664 55 48.1818 55H11.8182C11.336 55 10.8735 54.8119 10.5325 54.477C10.1916 54.1421 10 53.688 10 53.2144C10 52.7408 10.1916 52.2867 10.5325 51.9518C10.8735 51.6169 11.336 51.4288 11.8182 51.4288Z"
              fill="white"
            />
          </svg>
          <p>Sauna</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.5 15.4545C40.5 15.0688 40.658 14.6988 40.9393 14.426C41.2206 14.1532 41.6022 14 42 14H48C48.3978 14 48.7794 14.1532 49.0607 14.426C49.342 14.6988 49.5 15.0688 49.5 15.4545V18.3636H54C54.3978 18.3636 54.7794 18.5169 55.0607 18.7897C55.342 19.0624 55.5 19.4324 55.5 19.8182V28.5455H60V31.4545H55.5V40.1818C55.5 40.5676 55.342 40.9376 55.0607 41.2103C54.7794 41.4831 54.3978 41.6364 54 41.6364H49.5V44.5455C49.5 44.9312 49.342 45.3012 49.0607 45.574C48.7794 45.8468 48.3978 46 48 46H42C41.6022 46 41.2206 45.8468 40.9393 45.574C40.658 45.3012 40.5 44.9312 40.5 44.5455V31.4545H19.5V44.5455C19.5 44.9312 19.342 45.3012 19.0607 45.574C18.7794 45.8468 18.3978 46 18 46H12C11.6022 46 11.2206 45.8468 10.9393 45.574C10.658 45.3012 10.5 44.9312 10.5 44.5455V41.6364H6C5.60218 41.6364 5.22064 41.4831 4.93934 41.2103C4.65804 40.9376 4.5 40.5676 4.5 40.1818V31.4545H0V28.5455H4.5V19.8182C4.5 19.4324 4.65804 19.0624 4.93934 18.7897C5.22064 18.5169 5.60218 18.3636 6 18.3636H10.5V15.4545C10.5 15.0688 10.658 14.6988 10.9393 14.426C11.2206 14.1532 11.6022 14 12 14H18C18.3978 14 18.7794 14.1532 19.0607 14.426C19.342 14.6988 19.5 15.0688 19.5 15.4545V28.5455H40.5V15.4545ZM13.5 43.0909H16.5V16.9091H13.5V43.0909ZM10.5 21.2727H7.5V38.7273H10.5V21.2727ZM49.5 38.7273V21.2727H52.5V38.7273H49.5ZM46.5 16.9091V43.0909H43.5V16.9091H46.5Z"
              fill="white"
            />
          </svg>
          <p>Fitness</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M5 40V47.5M30 32.5V17.5C30 16.1739 30.5268 14.9021 31.4645 13.9645C32.4021 13.0268 33.6739 12.5 35 12.5H45C46.3261 12.5 47.5979 13.0268 48.5355 13.9645C49.4732 14.9021 50 16.1739 50 17.5V22.5M30 32.5V17.5C30 16.1739 29.4732 14.9021 28.5355 13.9645C27.5979 13.0268 26.3261 12.5 25 12.5H15C13.6739 12.5 12.4021 13.0268 11.4645 13.9645C10.5268 14.9021 10 16.1739 10 17.5V22.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M55 40V47.5M50 22.5C48.6739 22.5 47.4021 23.0268 46.4645 23.9645C45.5268 24.9021 45 26.1739 45 27.5V32.5H15V27.5C15 26.1739 14.4732 24.9021 13.5355 23.9645C12.5979 23.0268 11.3261 22.5 10 22.5C8.67392 22.5 7.40215 23.0268 6.46447 23.9645C5.52678 24.9021 5 26.1739 5 27.5V42.5H55V27.5C55 26.1739 54.4732 24.9021 53.5355 23.9645C52.5979 23.0268 51.3261 22.5 50 22.5Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Arrival Lounge</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M40.5897 35.3428C37.7665 32.9348 34.0792 31.4773 30.0402 31.4773C26.0013 31.4773 22.314 32.9348 19.4857 35.3477C19.4076 35.4167 19.3598 35.5127 19.3523 35.6156C19.3448 35.7184 19.3782 35.82 19.4455 35.8992L21.254 38.0117C21.3997 38.1792 21.6559 38.1989 21.8267 38.0561C24.017 36.1652 26.8905 35.0227 30.0402 35.0227C33.19 35.0227 36.0635 36.1652 38.2538 38.0511C38.4246 38.1939 38.6808 38.1742 38.8265 38.0068L40.635 35.8943C40.7756 35.7318 40.7555 35.4856 40.5897 35.3428ZM46.4874 28.4439C42.0315 24.8049 36.2996 22.6136 30.0402 22.6136C23.7809 22.6136 18.049 24.8049 13.588 28.4439C13.5064 28.5114 13.4554 28.6078 13.4459 28.712C13.4365 28.8163 13.4696 28.9199 13.5378 29.0004L15.3463 31.1129C15.487 31.2803 15.7432 31.3 15.9089 31.1621C19.7419 28.0402 24.67 26.1591 30.0402 26.1591C35.4104 26.1591 40.3386 28.0402 44.1665 31.1621C44.3373 31.3 44.5885 31.2803 44.7292 31.1129L46.5377 29.0004C46.6783 28.833 46.6582 28.5818 46.4874 28.4439ZM52.3499 21.5992C46.2513 16.6947 38.4447 13.75 29.9398 13.75C21.4901 13.75 13.7337 16.6553 7.65018 21.5008C7.60838 21.5337 7.57373 21.5745 7.54825 21.6207C7.52278 21.6669 7.50701 21.7177 7.50186 21.77C7.49671 21.8223 7.50229 21.8751 7.51827 21.9253C7.53425 21.9755 7.56031 22.022 7.59492 22.0621L9.4034 24.1746C9.54406 24.3371 9.79524 24.3617 9.96102 24.2288C15.4216 19.8905 22.3692 17.2955 29.9398 17.2955C37.5656 17.2955 44.5584 19.9299 50.0341 24.3223C50.2049 24.4602 50.456 24.4356 50.5967 24.2682L52.4052 22.1557C52.5509 21.9883 52.5257 21.7371 52.3499 21.5992ZM26.7749 43.0985C26.7749 43.9343 27.1136 44.7359 27.7166 45.3269C28.3195 45.918 29.1373 46.25 29.99 46.25C30.8427 46.25 31.6605 45.918 32.2634 45.3269C32.8664 44.7359 33.2051 43.9343 33.2051 43.0985C33.2051 42.2627 32.8664 41.4611 32.2634 40.87C31.6605 40.279 30.8427 39.947 29.99 39.947C29.1373 39.947 28.3195 40.279 27.7166 40.87C27.1136 41.4611 26.7749 42.2627 26.7749 43.0985Z"
              fill="white"
            />
          </svg>
          <p>Free Wifi</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M52.627 30.133L39.5102 25.2703L34.0273 18.1696C33.5506 17.5683 32.95 17.0841 32.2693 16.7521C31.5885 16.4201 30.8446 16.2486 30.0916 16.25H16.527C15.6974 16.2497 14.8803 16.4588 14.147 16.8589C13.4137 17.2591 12.7864 17.8382 12.3198 18.5458L7.71911 25.5153C6.76089 26.9658 6.2489 28.6805 6.25 30.4357V44.247C6.25 44.7111 6.42873 45.1562 6.74687 45.4843C7.06502 45.8125 7.49651 45.9968 7.94643 45.9968H11.5802C11.9492 47.4986 12.7932 48.8306 13.9785 49.782C15.1639 50.7334 16.623 51.25 18.125 51.25C19.627 51.25 21.0861 50.7334 22.2715 49.782C23.4568 48.8306 24.3008 47.4986 24.6698 45.9968H35.3302C35.6992 47.4986 36.5432 48.8306 37.7285 49.782C38.9139 50.7334 40.373 51.25 41.875 51.25C43.377 51.25 44.8361 50.7334 46.0215 49.782C47.2068 48.8306 48.0508 47.4986 48.4198 45.9968H52.0536C52.5035 45.9968 52.935 45.8125 53.2531 45.4843C53.5713 45.1562 53.75 44.7111 53.75 44.247V31.7796C53.7499 31.4193 53.6421 31.0677 53.4411 30.773C53.24 30.4783 52.9557 30.2548 52.627 30.133ZM18.125 47.7467C17.454 47.7467 16.798 47.5414 16.24 47.1569C15.6821 46.7723 15.2472 46.2257 14.9904 45.5863C14.7336 44.9468 14.6664 44.2431 14.7973 43.5643C14.9283 42.8854 15.2514 42.2618 15.7259 41.7724C16.2004 41.283 16.8049 40.9497 17.4631 40.8146C18.1212 40.6796 18.8034 40.7489 19.4234 41.0138C20.0434 41.2787 20.5732 41.7272 20.9461 42.3027C21.3189 42.8782 21.5179 43.5549 21.5179 44.247C21.5165 45.1748 21.1586 46.0641 20.5226 46.7201C19.8866 47.3761 19.0244 47.7453 18.125 47.7467ZM41.875 47.7467C41.204 47.7467 40.548 47.5414 39.99 47.1569C39.4321 46.7723 38.9972 46.2257 38.7404 45.5863C38.4836 44.9468 38.4164 44.2431 38.5473 43.5643C38.6782 42.8854 39.0014 42.2618 39.4759 41.7724C39.9504 41.283 40.5549 40.9497 41.2131 40.8146C41.8712 40.6796 42.5534 40.7489 43.1734 41.0138C43.7934 41.2787 44.3232 41.7272 44.6961 42.3027C45.0689 42.8782 45.2679 43.5549 45.2679 44.247C45.267 45.1749 44.9092 46.0645 44.2731 46.7206C43.637 47.3767 42.7746 47.7457 41.875 47.7467ZM50.3571 42.4972H48.4198C48.0508 40.9955 47.2068 39.6635 46.0215 38.7121C44.8361 37.7606 43.377 37.244 41.875 37.244C40.373 37.244 38.9139 37.7606 37.7285 38.7121C36.5432 39.6635 35.6992 40.9955 35.3302 42.4972H24.6698C24.3008 40.9955 23.4568 39.6635 22.2715 38.7121C21.0861 37.7606 19.627 37.244 18.125 37.244C16.623 37.244 15.1639 37.7606 13.9785 38.7121C12.7932 39.6635 11.9492 40.9955 11.5802 42.4972H9.64286V30.4357C9.64267 29.3822 9.95007 28.3529 10.525 27.4821L15.124 20.5161C15.2795 20.28 15.4887 20.0867 15.7332 19.9531C15.9777 19.8195 16.2502 19.7497 16.527 19.7496H30.0916C30.3384 19.7486 30.5825 19.8036 30.8064 19.9106C31.0304 20.0177 31.2288 20.1742 31.3877 20.3691L37.1555 27.839C37.3517 28.093 37.6125 28.2857 37.9088 28.3955L50.3571 33.0097V42.4972Z"
              fill="white"
            />
          </svg>
          <p>Parking</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M39.137 49.9999C39.6681 50.003 40.1945 49.9002 40.6855 49.6977C41.1765 49.4951 41.6222 49.1968 41.9967 48.8201L47.4161 43.4006C47.7885 43.026 47.9976 42.5191 47.9976 41.9908C47.9976 41.4625 47.7885 40.9556 47.4161 40.5809L39.4169 32.5818C39.0422 32.2093 38.5354 32.0003 38.0071 32.0003C37.4788 32.0003 36.9719 32.2093 36.5972 32.5818L33.3976 35.7614C31.1823 35.1708 29.1307 34.0834 27.3982 32.5818C25.9006 30.8466 24.8138 28.7959 24.2186 26.5824L27.3982 23.3828C27.7707 23.0081 27.9797 22.5012 27.9797 21.9729C27.9797 21.4446 27.7707 20.9378 27.3982 20.5631L19.3991 12.5639C19.0244 12.1915 18.5175 11.9824 17.9892 11.9824C17.4609 11.9824 16.9541 12.1915 16.5794 12.5639L11.1799 18.0033C10.8032 18.3778 10.5049 18.8235 10.3023 19.3145C10.0998 19.8055 9.997 20.3319 10.0001 20.863C10.1815 28.5468 13.2519 35.88 18.5992 41.4008C24.12 46.7481 31.4532 49.8185 39.137 49.9999ZM17.9992 16.8235L23.1787 22.0029L20.5989 24.5826C20.3546 24.8115 20.1716 25.0981 20.0668 25.416C19.962 25.734 19.9387 26.0731 19.999 26.4024C20.7465 29.7428 22.329 32.8391 24.5985 35.4015C27.159 37.6739 30.256 39.2569 33.5976 40.001C33.9219 40.0688 34.258 40.055 34.5756 39.9607C34.8932 39.8665 35.1825 39.6948 35.4174 39.4611L37.9971 36.8213L43.1765 42.0008L39.177 46.0004C32.5451 45.8296 26.2173 43.1829 21.4388 38.5812C16.8252 33.8007 14.1708 27.4645 13.9996 20.823L17.9992 16.8235ZM45.9962 28.0023H49.9958C50.0477 25.6245 49.6176 23.2609 48.7314 21.0538C47.8453 18.8468 46.5215 16.842 44.8398 15.1602C43.158 13.4785 41.1532 12.1547 38.9462 11.2686C36.7391 10.3824 34.3755 9.95233 31.9977 10.0042V14.0038C33.8533 13.9396 35.7023 14.2578 37.4297 14.9385C39.1572 15.6193 40.7261 16.6481 42.039 17.961C43.3519 19.2739 44.3807 20.8428 45.0615 22.5703C45.7422 24.2977 46.0604 26.1467 45.9962 28.0023Z"
              fill="white"
            />
            <path
              d="M31.25 22.75C35.45 22.75 37.25 24.55 37.25 28.75H41.25C41.25 22.31 37.69 18.75 31.25 18.75V22.75Z"
              fill="white"
            />
          </svg>
          <p>24 hours operation</p>
        </div>
      </div>
    </div>
  );
}
import gardenview from "../assets/images/searchResult/gardenview.jpg";
import delux from "../assets/images/searchResult/delux.jpeg";
import seaview from "../assets/images/searchResult/seaview.jpg";
import suit from "../assets/images/searchResult/suit.jpg";
import superior from "../assets/images/searchResult/superior.jpg";
import supreme from "../assets/images/searchResult/supreme.jpeg";
import seeImage from "../assets/images/searchResult/seeImage.svg";

export const rooms = [
  {
    id: 1,
    title: "Superior Garden View",
    detail: ["2 Guests", "1 Double bed", "32 sqm"],
    description:
      "Rooms (36sqm) with full garden views, 1 single bed, bathroom with bathtub & shower.",
    discount: 3100,
    price: 2500,
    photo: gardenview,
    icon: seeImage,
  },
  {
    id: 2,
    title: "Deluxe",
    detail: ["2 Guests", "1 Double bed", "32 sqm"],
    description:
      "Rooms (36sqm) with full garden views, 1 single bed, bathroom with bathtub & shower.",
    discount: 3100,
    price: 2500,
    photo: delux,
    icon: seeImage,
  },
  {
    id: 3,
    title: "Superior",
    detail: ["2 Guests", "1 Double bed", "32 sqm"],
    description:
      "Rooms (36sqm) with full garden views, 1 single bed, bathroom with bathtub & shower.",
    discount: 3100,
    price: 2500,
    photo: superior,
    icon: seeImage,
  },
  {
    id: 4,
    title: "Supreme",
    detail: ["2 Guests", "1 Double bed", "32 sqm"],
    description:
      "Rooms (36sqm) with full garden views, 1 single bed, bathroom with bathtub & shower.",
    discount: 3100,
    price: 2500,
    photo: supreme,
    icon: seeImage,
  },
  {
    id: 5,
    title: "Premier Sea View",
    detail: ["2 Guests", "1 Double bed", "32 sqm"],
    description:
      "Rooms (36sqm) with full garden views, 1 single bed, bathroom with bathtub & shower.",
    discount: 3100,
    price: 2500,
    photo: seaview,
    icon: seeImage,
  },
  {
    id: 6,
    title: "Suit",
    detail: ["2 Guests", "1 Double bed", "32 sqm"],
    description:
      "Rooms (36sqm) with full garden views, 1 single bed, bathroom with bathtub & shower.",
    discount: 3100,
    price: 2500,
    photo: suit,
    icon: seeImage,
  },
];

// `Per Night${(<br />)}(Including Taxes & Fees)`
// "Per Night (Including Taxes & Fees)"

export const bookingDetail = [
  {
    room_id: 1,
    room_type: "Superior Garden View",
    guest_number: 2,
    check_in: "Th, 19 Oct 2022 ",
    check_out: "Fri, 20 Oct 2022",
    payment_method: "Credit Card - *888",
    guest_request: {
      guest_request_id: 1,
      request_id: [
        {
          request_id: 1,
          request_name: "Airport tranfer",
          request_type: "Standard",
          request_price: 200,
        },
      ],
    },
    total_price: 2300,
    room_price: 2500,
    photo: gardenview,
    additional_request: "Can i have some chocolate?",
    created_at: "Tue, 16 Oct 2022",
  },
  {
    room_id: 2,
    room_type: "Deluxe",
    guest_number: 2,
    check_in: "Th, 19 Oct 2022 ",
    check_out: "Fri, 20 Oct 2022",
    payment_method: "Credit Card - *888",
    guest_request: {
      guest_request_id: 1,
      request_id: [
        {
          request_id: 1,
          request_name: "Airport tranfer",
          request_type: "Standard",
          request_price: 200,
        },
      ],
    },
    total_price: 2300,
    room_price: 2500,
    additional_request: "Can i have some chocolate?",
    photo: delux,
    created_at: "Tue, 16 Oct 2022",
  },
  {
    room_id: 3,
    room_type: "Superior",
    guest_number: 2,
    check_in: "Th, 19 Oct 2022 ",
    check_out: "Fri, 20 Oct 2022",
    payment_method: "Credit Card - *888",
    guest_request: {
      guest_request_id: 1,
      request_id: [
        {
          request_id: 1,
          request_name: "Airport tranfer",
          request_type: "Standard",
          request_price: 200,
        },
      ],
    },
    total_price: 2300,
    room_price: 2500,
    additional_request: "Can i have some chocolate?",
    photo: superior,
    created_at: "Tue, 16 Oct 2022",
  },
  {
    room_id: 4,
    room_type: "Supreme",
    guest_number: 2,
    check_in: "Th, 19 Oct 2022 ",
    check_out: "Fri, 20 Oct 2022",
    payment_method: "Credit Card - *888",
    guest_request: {
      guest_request_id: 1,
      request_id: [
        {
          request_id: 1,
          request_name: "Airport tranfer",
          request_type: "Standard",
          request_price: 200,
        },
      ],
    },
    total_price: 2300,
    room_price: 2500,
    additional_request: "Can i have some chocolate?",
    photo: supreme,
    created_at: "Tue, 16 Oct 2022",
  },
  {
    room_id: 5,
    room_type: "Premier Sea View",
    guest_number: 2,
    check_in: "Th, 19 Oct 2022 ",
    check_out: "Fri, 20 Oct 2022",
    payment_method: "Credit Card - *888",
    guest_request: {
      guest_request_id: 1,
      request_id: [
        {
          request_id: 1,
          request_name: "Airport tranfer",
          request_type: "Standard",
          request_price: 200,
        },
      ],
    },
    total_price: 2300,
    room_price: 2500,
    additional_request: "Can i have some chocolate?",
    photo: seaview,
    created_at: "Tue, 16 Oct 2022",
  },
  {
    room_id: 6,
    room_type: "Suit",
    guest_number: 2,
    check_in: "Th, 19 Oct 2022 ",
    check_out: "Fri, 20 Oct 2022",
    payment_method: "Credit Card - *888",
    guest_request: {
      guest_request_id: 1,
      request_id: [
        {
          request_id: 1,
          request_name: "Airport tranfer",
          request_type: "Standard",
          request_price: 200,
        },
      ],
    },
    total_price: 2300,
    room_price: 2500,
    additional_request: "Can i have some chocolate?",
    photo: suit,
    created_at: "Tue, 16 Oct 2022",
  },
];
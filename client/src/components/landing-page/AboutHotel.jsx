export default function AboutHotel() {
  return (
    <div
      id="about"
      className="pt-[115px] pb-[132px] max-w-[1120px] m-auto flex flex-col gap-12"
    >
      <h1 className="text-[4.25rem] text-green800 font-medium font-noto-serif tracking-[-0.085rem]">
        Neatly Hotel
      </h1>
      <div className="max-w-[928px] flex flex-col gap-6 self-end">
        <p className="text-gray700">
          Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation
          with an outdoor pool, kids' club, sports facilities and a fitness
          centre. There is also a spa, an indoor pool and saunas.
        </p>
        <p className="text-gray700">
          All units at the hotel are equipped with a seating area, a flat-screen
          TV with satellite channels, a dining area and a private bathroom with
          free toiletries, a bathtub and a hairdryer. Every room in Neatly Hotel
          features a furnished balcony. Some rooms are equipped with a coffee
          machine.
        </p>
        <p className="text-gray700">
          Free WiFi and entertainment facilities are available at property and
          also rentals are provided to explore the area.
        </p>
      </div>
    </div>
  );
}

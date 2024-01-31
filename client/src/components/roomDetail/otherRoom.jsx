function OtherRoom () {
  const imageRoom = [
  ];
  return (
    <section className="w-full h-[660px] flex justify-center content-center p-24">
      <div className="w-4/5 h-[455px] flex flex-col justify-between">
        <h1 className="text-4xl text-black text-center">Other Room</h1>
        <div className="w-full h-[340px] flex gap-6">
          <div className="w-2/4 h-[340px]">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="image"
              className="w-full h-[340px]"
            />
          </div>
          <div className="w-2/4 h-[340px]">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="image"
              className="w-full h-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
   
}

export default OtherRoom;
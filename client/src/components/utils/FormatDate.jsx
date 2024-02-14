const formatDate = (dateString) => {
  const date = new Date(dateString);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  const formattedDate = `${dayName} ${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
};

export default formatDate;

export default function dateFormat(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return "Loading...";
    const optionsDayWeek = { weekday: "short" };
    const optionsMonth = { month: "short" };
    const optionsDay = { day: "numeric" };
    const optionsYear = { year: "numeric" };

    const dayWeek = date.toLocaleDateString("en-US", optionsDayWeek);
    const month = date.toLocaleDateString("en-US", optionsMonth);
    const day = date.toLocaleDateString("en-US", optionsDay);
    const year = date.toLocaleDateString("en-US", optionsYear);

    return `${dayWeek}, ${month} ${day} ${year}`;
}
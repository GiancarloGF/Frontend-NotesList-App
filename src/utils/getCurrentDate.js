const weekdayMonthDay = () => {
    var date = new Date();
    var options = { weekday: 'short', month: 'long', day: 'numeric' };

    return date.toLocaleDateString("es-ES", options);

}

export default{
    weekdayMonthDay
}
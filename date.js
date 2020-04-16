module.exports.getDate = getDate; //note : we can also make shorter code i.e
//using only exports in place of module.exports
//exports = module.exports

function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",

    };

    const day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay = getDay;

function getDay() {
    const today = new Date();
    const options = {
        weekday: "long"
    };

    const day = today.toLocaleDateString("en-US", options);
    return day;
}
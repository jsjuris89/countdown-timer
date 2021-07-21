dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);

    element.querySelector(".until__event").textContent = `Until ${targetDate.format("D MMMM YYYY")}`
}

activateCountdown(document.getElementById("myCountdown"), "2021-12-31")
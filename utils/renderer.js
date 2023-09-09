
import {calculateAge, daysToDeparture} from "./dateUtils.js";
import {SEAT_DESIGNATION_MAPPING, AIRCRAFT_MAPPING} from "./aircraftInfo.js"

function renderSinglePassengerInfo({personName, surname, birthday, 
    flightDate, seat, seatDesignation, aircraftManufacturer}) {
    return {
        "Imię i nazwisko": `${personName} ${surname}`,
        "Wiek": calculateAge(birthday),
        "Dni do wylotu": daysToDeparture(flightDate),
        "Miejsce": `${seat}${seatDesignation} (${SEAT_DESIGNATION_MAPPING[seatDesignation]})`,
        "Typ samolotu": AIRCRAFT_MAPPING[aircraftManufacturer]
    }
}

export function renderPassangerInfo(passengerInfo) {
    return console.table(passengerInfo.map(renderSinglePassengerInfo));
}
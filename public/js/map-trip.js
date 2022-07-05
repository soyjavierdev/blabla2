let map

function init() {
    renderMap()
    getTripsFromDB()

}


function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 5, center: { lat: 41.3977381, lng: 2.190471916 } }
    )
}


function getTripsFromDB() {
    axios
        .get('/api/trips')
        .then(response => {
            console.log(response)
            printMarkers(response.data)
        })
        .catch(err => console.log(err))
}


function printMarkers(trips) {

    console.log(trips)

    trips.forEach(trip => {

        let position = { lat: trip.origin.location.coordinates[0], lng: trip.origin.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

    map.setCenter({ lat: trips[0].location.coordinates[0], lng: trips[0].location.coordinates[1] })
}
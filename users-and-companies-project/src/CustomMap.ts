interface markerData {
    location: {
        lat: number;
        lng: number;
    },
    getSumarry(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id_of_element_to_enject: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id_of_element_to_enject), {
            zoom: 2,
            center: {
                lat: 43.672140,
                lng: 40.296295,
            }
        });
    }

    addMarker(markerData: markerData):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerData.location.lat,
                lng: markerData.location.lng
            }
        });
        const infowindow = new google.maps.InfoWindow({ content: markerData.getSumarry() }); 
        marker.addListener('click', () => infowindow.open(this.googleMap, marker));
    }
}
"use client"
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import eventsData from "../historyEvents";
export interface HistoricalEvent {
    id:number,
    title: String,
    description: String,
    position: [number,number];
    category: String
}

const defaultPosition: [number,number] = [51.505,-0.09];

function MapsApp() {
    const icon: Icon = new Icon({
        iconUrl: "marker.svg",
        iconSize:[25,41],
        iconAnchor:[12,41],
    })

    // const eventsData: HistoricalEvent[]=[
    //     {
    //         id:1,
    //         title:"THe",
    //         description:"Hello",
    //         position:[49.414,-0.8322],
    //         category:"War"
    //     }
    // ];
  return (
    <div className="content">
      <div className="h-12" ></div>
      <div className="flex flex-col w-full h-full" >
      <MapContainer center={defaultPosition} zoom={13}
      className="map-container"
      >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
   
    {
        eventsData.map((event)=>{
            return (
                <Marker key={event.id} position={event.position} icon={icon} >
                    <Popup>
                        <div className="popup-inner">
                            <h2 className="popup-inner__title --red">
                                {event.title}
                            </h2>
                        </div>
                        <p className="popup-inner__description" >
                            {event.description}
                        </p>
                        <button>
                            Favourite
                        </button>
                    </Popup>
                </Marker>
            )
        })
    }
    
  </MapContainer>
      </div>
    </div>
  )
}

export default MapsApp

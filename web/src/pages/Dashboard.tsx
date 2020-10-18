import React, { useEffect, useState } from "react";
import { FiCheck, FiTrash } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom'

import mapIcon from '../utils/mapIcon';
import api from "../services/api";
import Sidebar from "../components/SidebarDashboard";

import '../styles/pages/dashboard.css';

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  name: string,
  status: number,
}

export default function Dashboard() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('allOrphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  function handleActive(id: number) {
    api.put(`orphange/${id}`);
  }

  function handleDelete(id: number) {
    api.delete(`orphanage/${id}`);
  }

  return (
    <div id="page-dashboard">
      <Sidebar />

      <main>
        <legend>Orfanatos Cadastrados</legend>

        <div className="map-content">
          {orphanages.map(orphanage => {
            return (
              <div className="map-container" key={orphanage.id}>
                <Map
                  center={[orphanage.latitude, orphanage.longitude]}
                  zoom={16}
                  style={{ width: '100%', height: 280 }}
                  dragging={false}
                  touchZoom={false}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                  <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                </Map>

                <footer>
                  {orphanage.name}
                  <div>
                    <button onClick={() => handleActive(orphanage.id)}>
                      <FiCheck size="24" color="#15C3D6" />
                    </button>
                    <button onClick={() => handleDelete(orphanage.id)}>
                      <FiTrash size="24" color="#15C3D6" />
                    </button>
                  </div>
                </footer>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

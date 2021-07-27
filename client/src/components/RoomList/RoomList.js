import React, { useState, useEffect } from "react";
import "./RoomList.scss";
import Room from "../Room/Room";
import api from "../../services/api";

export default function RoomList() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Sala Teste",
      description: "diosajdoi dijasodi aod odisjad oiasjd ",
    },

    {
      id: 2,
      name: "Sala Remanesceidons",
      description:
        "diodsadassajdoi dijasaaaaaaa aod odisjzzzzzzzzzzzzzzzzziasjd ",
    },
    {
      id: 3,
      name: "Sala dasdsadsadaas",
      description:
        "diodsadassajdoi dijasewqewqewqewqaaaaaaa aod odisjzzzzzzzzzzzzzzzzziasjd ",
    },
  ]);

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="rooms">
        {rooms.map((room) => (
          <Room
            name={room.name}
            description={room.description}
            roomId={room.id}
            key={room.id}
            private={room.private}
          />
        ))}
      </div>
    </>
  );
}

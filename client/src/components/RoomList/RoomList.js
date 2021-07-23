import React, { useState } from "react";
import "./RoomList.scss";
import Room from "../Room/Room";

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
  ]);
  return (
    <div className="rooms">
      {rooms.map((room) => (
        <Room
          name={room.name}
          description={room.description}
          roomId={room.id}
        />
      ))}
    </div>
  );
}

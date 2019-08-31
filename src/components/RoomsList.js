import React from 'react';
import Room from './Room';

export default function RoomsList({rooms}) {
  if(!rooms.length) {
    return (
      <div className="empty-search">
        <h3>
          Sorry, no rooms match your search criteria.
        </h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room, i) => {
          return (
            <Room key={i} room={room}></Room>
          )
        })}
      </div>
    </section>
  );
}

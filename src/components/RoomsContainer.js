import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';


function RoomContainer({context}) {
  const { loading, sortedRooms, rooms} = context;
  if(loading) {
    return <Loading />;
  }
  
  return (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </>
  )
}

export default withRoomConsumer(RoomContainer)





// Below is just for reference to show how to use context in a functional component
// Note the syntax and how it differs from the syntax used above using higher order
// components to use context

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../Context';
// import Loading from './Loading';





// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
// {
//   (value)=>{
//     const { rooms, sortedRooms, loading } = value;
//    return (
//     <div className="roomslist">
//       Hello from rooms RoomsContainer
//       {loading?<Loading />:''}
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </div>
//    ) 
//   }
// }
//     </RoomConsumer>
//   );
// }
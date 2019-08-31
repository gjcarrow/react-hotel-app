import React, { Component } from 'react';
// The import below was bringing in local data
// import items from './data';
import Client from './Contentful';

const RoomContext = React.createContext();
class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: 'all',
      minPrice: 0,
      price: 0,
      maxPrice: 0,
      breakfast: false,
      pets: false,
      minSize: 0,
      maxSize: 0
    };
  }
  
  // Get Data
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'hotelApp',
        // order: "sys.createdAt"
        //To order by price:
        // order: "fields.price"
        // To order by reverse of the field:
        order: "-fields.price"
      })
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true)
      let maxPrice = Math.max(...rooms.map(item=>item.price))
      let minPrice = Math.min(...rooms.map(item=>item.price))
      let maxSize = Math.max(...rooms.map(item=>item.size))
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        minPrice,
        maxSize
      })
    } catch (error) {
      console.log(error);
    }
  }  
   
  componentDidMount() {
    this.getData();    
  }

  formatData(aItems) {
    let tempItems = aItems.map((item)=>{
      let id = item.sys.id
      let images = item.fields.images.map(image=>image.fields.file.url)
      let room = { ...item.fields, images, id }
      return room
    })
    return tempItems;
  }

  getRoom= (slug) => {
    let tempRooms = [ ...this.state.rooms ];
    const room = tempRooms.find((el)=>{
     return el.slug === slug 
    })
    return room;
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type==='checkbox'?target.checked:target.value
    const name = event.target.name
    console.log(`The check value im looking for is ${target.checked}`);
    this.setState({
      [name]: value
    }, this.filterRooms)
  }
  
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state
    // All the rooms
    let tempRooms = [...rooms]
    // Transform Values
    capacity = parseInt(capacity, 10)
    price = parseInt(price, 10)
    
// Filter by type
if(type!=='all') {
  tempRooms = tempRooms.filter(room=>room.type===type)
}
// Filter by Capacity
if(capacity && capacity !== 1){
  tempRooms = tempRooms.filter(room => room.capacity >= capacity)
}
// Filter by Price
tempRooms = tempRooms.filter(room=>room.price<=price)

// Filter by roomsize
tempRooms = tempRooms.filter(room=>{
  return (room.size>minSize)&&(room.size<maxSize)
  })
  
// Filter by breakfast
if(breakfast) {
  tempRooms = tempRooms.filter(room=>room.breakfast)
}
if(pets) {
  tempRooms = tempRooms.filter(room=>room.pets)
}
  
this.setState({
  sortedRooms: tempRooms
})

}


  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        { this.props.children }
      </RoomContext.Provider>
    );
  }
}



const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        { value=> <Component {...props} context={value} /> }
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext };


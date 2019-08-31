import React from 'react';
import { useContext } from "react";
import { RoomContext } from '../Context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value)=>{
 return [...new Set(items.map(item => item[value]))] 
}


export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context

  // get unique types
  let types = getUnique(rooms, 'type');
  // add 'all' type for the select option
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index)=>{
    return <option value={item} key={index}>{item}</option>
  })

  // Get unique capacity
  let capacities = getUnique(rooms, 'capacity');
  // map to jsx
  capacities = capacities.map((item, index)=>{
    return <option value={item} key={index}>{item}</option>
  })
  
  return (
    <section className="filter-container">
      <Title title="find your perfect room" />
      <form className="filter-form">
        {/*  select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select 
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      {/* end select type */}
      {/*  select guests */}
      <div className="form-group">
        <label htmlFor="capacity">No. of Guests</label>
        <select 
          name="capacity"
          id="capacity"
          value={capacity}
          className="form-control"
          onChange={handleChange}
        >
          {capacities}
        </select>
      </div>
    {/* end select guests */}
    {/* Room Price */}
    <div className="form-group">
      <label htmlFor="price">room price ${price}</label>
      <input 
        type="range"
        name="price"
        min={minPrice} 
        max={maxPrice}
        id="price"
        value={price}
        onChange={handleChange}
        className="form-control"
        />
      
    </div>
    {/* End Room Price */}
    {/*  Room Size */}
    <div className="form-group">
      <label htmlFor="size">room size</label>
      <div className="size-inputs">
        <input
          type="number"
          name="minSize"
          id="size"
          value={minSize}
          onChange={handleChange}
          className="size-input"
          />
        <input
          type="number"
          name="maxSize"
          id="size"
          value={maxSize}
          onChange={handleChange}
          className="size-input"
          />
      </div>
    </div>

    {/* End Room Size */}
    {/* Extras */}
    <div className="form-group">
      <div className="single-extra">
        <input 
          type="checkbox"
          name="breakfast"
          id="breakfast"
          onChange={handleChange}
          checked={breakfast}
        />
        <label htmlFor="breakfast">breakfast</label>
      </div>
      <div className="single-extra">
        <input 
          type="checkbox"
          name="pets"
          id="pets"
          onChange={handleChange}
          checked={pets}
        />
        <label htmlFor="pets">pets</label>
      </div>
    </div>
    {/* End of Extras */}

      </form>
    </section>
  );
  };
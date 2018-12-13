import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';
import Heading from '../components/heading'



const color = 'orange'
export default class App extends Component {
  render() {
    return (
      <div>
        <Heading title="nigeria weather search app" 
        description="... type in your city name to see the weather!"
        />
        <SearchBar />
        <WeatherList />
        </div>
    );
  }
}


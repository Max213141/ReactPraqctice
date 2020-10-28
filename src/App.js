import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        // {name: 'Audi', year: 2016},
        // {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }



  toggleClassHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index,1)

    this.setState({
      cars
    })
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {

    console.log('render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car,index) =>{
        return (
            <Car
                key = {index}
                name = {car.name}
                year = {car.year}
                onDelete = {this.deleteHandler.bind(this, index)}
                onChangeName = { event => this.onChangeName(event.target.value, index)}
            />
        )
      })
    }

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}

        <h1>{this.props.title}</h1>

        <button
          onClick={this.toggleClassHandler}
        >Toggle class</button>

        <div style = {{
          width: '400px',
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
      </div>
    );
  }
}

export default App;

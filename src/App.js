import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from "./Counter/counter";

export const clickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
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

  UNSAFE_componentWillMount() {
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
           <ErrorBoundary key = {index}>
             <Car
                 index = {index}
                 key = {index}
                 name = {car.name}
                 year = {car.year}
                 onDelete = {this.deleteHandler.bind(this, index)}
                 onChangeName = { event => this.onChangeName(event.target.value, index)}
             />
           </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}

        <h1>{this.props.title}</h1>
        <clickedContext.Provider value = {this.state.clicked}>
          <Counter />
        </clickedContext.Provider>

        <hr/>
        <button
          onClick={this.toggleClassHandler}
          style = {{marginTop: '10px'}}
        >Toggle class</button>

        <button onClick={() => this.setState({clicked: true})}>
          Change clicked
        </button>

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

import React from 'react'
import classes from './car.css'
import PropTypes from  'prop-types'
import withClass from "../HOC/withClass"

class Car extends React.Component {

    render() {

        // if(Math.random()>0.7) {
        //     throw new Error('Car faild')
        // }

        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if(this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }



        return (
            <React.Fragment>
                <h3>Сar name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangename: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes.Car)
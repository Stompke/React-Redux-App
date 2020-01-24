import React from 'react';

import { connect } from 'react-redux'

const Meals = props => {

    console.log(props)
    return (
        <div>
            {props.mealData.map(item => 
            <div>
                <h3>{item.title}</h3>
            <p><strong>Ingredients:</strong>{item.ingredients}</p>
                <img src={item.thumbnail} alt={item.title} />
            </div>

            )}
        </div>
    )
}




const mapStateToProps = state => {
    return {
        mealData: state.mealData
    }
}

export default connect(
mapStateToProps
)(Meals)
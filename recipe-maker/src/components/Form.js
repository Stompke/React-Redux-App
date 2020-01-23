import React from 'react';

import { connect } from 'react-redux'

const Form = props => {

    return (
        <div>
            <div>
                <span> <input/> <button>Search Meal</button></span>
            </div>
            <div>
                <span> <input/> <button>Add Ingredients</button></span>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        meal: state.meal,
        ingredients: state.ingredients,
        mealData: state.mealData
    }
}

export default connect(
    mapStateToProps
)(Form)
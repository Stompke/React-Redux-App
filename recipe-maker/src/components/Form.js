import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { fetchData } from '../actions';

const Form = props => {
    // const [apiCall, setApiCall] = useState('http://www.recipepuppy.com/api/')
    const [ingredients, setIngredients] = useState('');
    const [mealType, setMealType] = useState('');

    const apiCall = `http://www.recipepuppy.com/api/${ingredients || mealType ? '?' : ''}${ingredients}
    ${ingredients && mealType && '&' }
    ${mealType}`



    const mealOnChange = e => {
        if(e.target.value) {
            setMealType(`q=${e.target.value}`)
        } else {
            setMealType('')
        }
    }

    const ingredientsOnChange = e => {
        if(e.target.value) {
            setIngredients(`i=${e.target.value}`)
        } else {
            setIngredients('');
        }
    }


    return (
        <div>
<h1>{apiCall}</h1>
            <div>
                <span> <input onChange={mealOnChange} placeholder='meal type'/> </span>
            </div>
            <div>
                <span> <input onChange={ingredientsOnChange} placeholder='ingredients'/> <button>Add Ingredients</button></span>
            </div>
            <button onClick={() => props.fetchData(apiCall)}>Get Meals</button>
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
    mapStateToProps,
    {fetchData}
)(Form)
import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux'
import { fetchData } from '../actions';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: {
        marginBottom: '20px' 
    },

  }));


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

    const classes = useStyles();


    return (
        <div>
<form className={classes.root} noValidate autoComplete="off">
      <TextField className={classes.input} onChange={mealOnChange}  id="standard-basic" label="Meal Type" />
      <TextField  onChange={ingredientsOnChange} id="filled-basic" label="ingredients" variant="filled" />
    </form>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => props.fetchData(apiCall)}>Get Meals</Button>
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
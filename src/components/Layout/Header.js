import React, {Fragment} from 'react'
import classes from './Header.module.css'
import mealsimage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = props =>{

return(
<Fragment>
  <header className={classes.header}>
  <h1>ReactMealsAPP</h1>
  <HeaderCartButton onClick = {props.openCart}/>
  </header>
  <div className={classes['main-image']}>
    <img src={mealsimage} alt="background"/>
  </div>
</Fragment>
)
}

export default Header

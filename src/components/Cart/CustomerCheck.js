import classes from './CustomerCheck.module.css'
import { useRef,useState } from 'react';



const CustomerCheck = (props) =>{

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const [formvalid, setformvalid] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    })

    const confirmHandler= (event) => {
        event.preventDefault();
        
        const isEmpty = (value) => value.trim() === ''

        const enterName = nameInputRef.current.value;
        const enterStreet = streetInputRef.current.value;
        const enterPostal = postalInputRef.current.value;
        const enterCity = cityInputRef.current.value;

        const checkNameIsValid = !isEmpty(enterName); 
        const checkStreetIsValid = !(enterStreet.trim() === '');
        const checkCityIsValid = ! (enterCity.trim() === '');
        const checkPostalIsValid = enterPostal.trim().length === 5;

        setformvalid({
            name: checkNameIsValid,
            street: checkStreetIsValid,
            city: checkCityIsValid,
            postal: checkPostalIsValid
        })

        const formIsOkay = checkNameIsValid & checkCityIsValid & checkPostalIsValid &checkStreetIsValid;

        if (!formIsOkay)  
           { return};
        
        
        props.onConfirm ({
            name: enterName,
            street: enterStreet,
            city: enterCity,
            postal: enterPostal,
        });
    };


        const nameControlClasses = `${classes.control} ${
            formvalid.name? '' : classes.invalid
        }`;
        const streetControlClasses = `${classes.control} ${
            formvalid.street? '' : classes.invalid
          }`;
        const postalCodeControlClasses = `${classes.control} ${
            formvalid.postal? '' : classes.invalid
          }`;
        const cityControlClasses = `${classes.control} ${
            formvalid.city? '' : classes.invalid
          }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
            </div>

            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef}/>
            </div>

            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Your postal ID</label>
                <input type="text" id="postal" ref={postalInputRef}/>
            </div>

            <div className={cityControlClasses}>
                <label htmlFor="city">city</label>
                <input type="text" id="city" ref={cityInputRef}/>
            </div>

            <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};






export default CustomerCheck
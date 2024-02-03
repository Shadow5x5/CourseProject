import "./Button.css"
const Button = ({value, value2, onTypeSelect, selectedType, }) => {

    function handleClick(value){
        onTypeSelect(value);
    }


    return (  
    <button className={value2===selectedType ? "active" : 'disable'} onClick={() => handleClick(value2)}>
        {value}
    </button> );
}
export default Button;
const ButtonComponent = (props)=>(
<button type="button" onClick={()=>{alert("Mi hai premuto")}} className="button1">{props.testo}</button>
);

export default ButtonComponent;
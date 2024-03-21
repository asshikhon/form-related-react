import UseInputState from "../../hooks/UseInputState";

const HookForm = () => {
// const [name, handleNameChange] = UseInputState('Rojoni hooked');
const emailState = UseInputState('ssdjfksj@gmail.com');

const handleSubmit = (e) => {
e.preventDefault();
console.log('form data', emailState.value);


}

    return (
        <div>
                        <form onSubmit={handleSubmit}>
{/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
<br />
<input {...emailState} type="email" name="email"/>
<br />
<input type="password" name="password"/>
<br />
<input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
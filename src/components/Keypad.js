// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" placeholder="password" name="inputpassword"
            onChange={() => console.log("Entering password...")} />
        </div>
    )
}

export default Keypad;
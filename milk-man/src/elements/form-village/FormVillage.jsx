import "./formVillage.css";

export default function FormVillage() {
    const information = [
        { value: "kheri Safa", name: "Kheri Safa" },
        { value: "Khurkbura", name: "Khurkbura" },
        { value: "Tarkha", name: "Tarkha" }
    ];
    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <>
            <fieldset className="formVillage">
                <legend>Choose Village</legend>
                <form>
                    <h3>Select the Village</h3>
                    {information.map(person => (
                        <label key={person.value}>
                            <input
                                type="radio"
                                name="village"
                                value={person.value}
                            />
                            {person.name}
                        </label>
                    ))}
                    <input type="submit" onClick={event=>handleSubmit(event)} value="Select"></input>
                </form>
            </fieldset>
        </>
    );
}

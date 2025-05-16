import "./Slots.css"
import SlotButton from "../SlotButton/SlotButton";

export default function Slots({ value }) {
    //generate random index
    const value1 = Math.floor(Math.random() * value.length);
    const value2 = Math.floor(Math.random() * value.length);
    const value3 = Math.floor(Math.random() * value.length);

    //get random value from the array
    const randValue1 = value[value1]
    const randValue2 = value[value2]
    const randValue3 = value[value3]

    const isMatching = randValue1 === randValue2 && randValue1 === randValue3;
    const headingStyle = { color: isMatching ? "green" : "red" };



    return (
        <section className="game__container">

            <h1>{randValue1}{randValue2}{randValue3}</h1>
            <h2 style={headingStyle}> {isMatching ? "You Win! 🏆" : "You Lose 😿"}</h2>
            {isMatching && <h3>Congrats!!</h3>}

            <SlotButton />



        </section>

    )
}
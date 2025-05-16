import './SlotButton.css'
export default function SlotButton(onClick) {
    return (
        <nav className="button__container">
            <button class="play-again__button" onClick={e => {
                window.location.reload(); onClick()

            }} >Play Again</button>
        </nav>
    )
}


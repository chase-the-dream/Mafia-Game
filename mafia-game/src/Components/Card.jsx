import cardBack from '../assets/card-back.png'
import jackCard from '../assets/jack.png'
import jokerCard from '../assets/joker.png'
import kingCard from '../assets/king.png'
import queenCard from '../assets/queen.png'

import { useState } from 'react'
import './Card.css'

// mafia - 1, detect - 2, doc - 3, town - 4

function Card({ role }) {
    const [cardSrc, setCardSrc] = useState(cardBack)
    const [active, setActive] = useState(false)
    const [revealed, setRevealed] = useState(false)
    const roleImages = {
        1: jokerCard,
        2: kingCard,
        3: queenCard,
        4: jackCard,
    }

    function handleClick() {
        setActive((prevActive) => {
            const nextActive = !prevActive
            if (nextActive) {
                setRevealed(true)
            }
            setCardSrc(nextActive ? (roleImages[role] ?? cardBack) : cardBack)
            return nextActive
        })
    }

    const cardFilter = !active && revealed ? 'grayscale(100%)' : 'none'

    return(
        <>
            <button className="card-button" type="button" onClick={handleClick}>
                <img className="card-img" src={cardSrc} alt="Card Back" style={{ filter: cardFilter }}></img>
            </button>
        </>
    )
}

export default Card
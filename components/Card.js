import { capitalizeFirstLetter } from '../lib/utils'

import styles from '../styles/Card.module.css'

export default function Card({ card, color, stats }) {  
    return (
        <div className={styles.card}>
            <h4>{capitalizeFirstLetter(card.title)}</h4>
            <h2 style={{
                color: color
            }}>{`+ ${stats[card.sinceYesterday]}`}</h2>
            <p>{`Total: ${stats[card.title]}`}</p>
        </div>
    )
}
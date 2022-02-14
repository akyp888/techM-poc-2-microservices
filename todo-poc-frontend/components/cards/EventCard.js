import styles from '../../styles/Home.module.css'
import Link from 'next/link'
const EventCard = ({Data,Index,OnDelete}) => {
    console.log()
    return(

    <Link href={`/reminder/[type]/[id]`} as={`/reminder/event/${Data.id}`}>
       <a className={styles.card}>
    <div className={styles.remove1} onClick={(e)=>OnDelete(e,Data.id)} ><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.remove}><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></div>
      <h2>{Index+". "+Data.event} &rarr;</h2>
      <p style={{fontSize:18+"px"}}>{"Start"+": "+Data.startDateTime}</p>
      <p  style={{fontSize:18+"px"}}>{"End"+": "+Data.endDateTime}</p>
      <p>{Data.description}</p>
      </a>
      </Link>
 
    )
}
export default EventCard
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tasks from '../components/Tasks';
import Events from '../components/Events';
import { useState } from 'react';


export default function Home() {

const [menu, setMenu] = useState('tasks')

const changeMenu = (selectedMenu) => {

  setMenu(selectedMenu)

}
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Reminder App</title>
        <meta name="description" content="Generated by create nesxt app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
      Reminder <a>App</a>
    </h1>
      <div className={`${styles.grid} ${styles.navbar}`}>
     
     <button className={`${styles.button} ${styles.button2} ${menu==='tasks' && styles.buttonActive}`} value="tasks" onClick={(e)=>changeMenu(e.target.value)} >Tasks</button>
     <button className={`${styles.button} ${styles.button2} ${menu==='events' && styles.buttonActive}`} value="events" onClick={(e)=>changeMenu(e.target.value)} >Events</button>
     </div>
{menu === 'tasks'?<Tasks></Tasks>:<Events></Events>}
    </div>
  )
}
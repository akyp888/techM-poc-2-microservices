import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import TaskCard from './cards/TaskCard'
import Modal from 'react-modal';

const Tasks = () => {


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [onCrud, setOnCrud] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({task:'',description:''})

 

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/todos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [onCrud])

  function OnDelete (e, id){
    fetch('http://localhost:8080/todos/' + id, {method: 'DELETE'}).then(() => {setOnCrud(!onCrud);})
    e.preventDefault();
      return false;
  }
  async function OnAdd(){
    console.log(JSON.stringify(formData))
    await fetch('http://localhost:8080/todos', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(formData)}).then(()=>{setOnCrud(!onCrud)})
    setFormData({task:'',description:''})
    closeModal()
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  if (isLoading) return <p>Loading...</p>

  return(
      <>
      
  
  
    <div className={styles.grid}>
    <div className={styles.navbar}style={{textAlign:"center",marginBottom:5+"%"}}>
    <p className={styles.description}>
      Track Your Tasks
    </p>
    <button onClick={()=>openModal()} className={`${styles.button} ${styles.button2}`} >+ Add Task</button>
    </div>
      {!data ?<p>No Tasks To Show</p>: data.map((data,index)=>(<TaskCard key={data.id} Data={data} Index={index+1} OnDelete={OnDelete}></TaskCard>)).reverse()}
    </div>
 

  <footer className={styles.footer}>
   
  </footer>
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <label>Task</label>
    <input type="text" value={formData.task} onChange={(e)=>setFormData({...formData,task:e.target.value})} className={styles.input} placeholder="Learn Microservices Architecture" />
    <label>Description</label>
    <textarea type="text" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}  rows="4" cols="50" className={styles.input} placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    <input type="submit" onClick={()=>(OnAdd())} className={styles.input} value="Add" />
  </Modal>
  </>
  )
}
export default Tasks
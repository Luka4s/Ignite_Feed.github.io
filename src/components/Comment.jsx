import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react'
import styles  from './Comment.module.css'
import imgProfile from '../assets/Lucas_Rodrigues.jpg'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
             <Avatar hasBorder={false} src={"https://github.com/LucasPolizeli.png"} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Rodrigues</strong>
                            <time className={styles.time}dateTime='2023-07-05 18:52:50'title='05 de Julho de 2023 ás 18:51'>Cerca de uma hora atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <TrashSimple size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Lucas, parabens!!</p>
                </div>
                    <footer>
                        <button>
                            <ThumbsUp/>
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}
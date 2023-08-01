import style from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({author, prublishedAt}){
    const publishedDateFormatted = format(
        prublishedAt,
         "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    }); 

    const publishedDateRelativeNow = formatDistanceToNow(prublishedAt, {
        locale: ptBR,
    })

    return(
     <article className={style.post}>
        <header>
            <div className={style.author}>
                <Avatar src={author.avatarUrl} alt="" />
                <div className={authorInfo}>
                    <strong>{author.nome}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime="2023-07-05 18:52:50">
                    {publishedDateRelativeNow}
            </time>
        </header>
        
            <div className={style.content}>
              
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário'/>
                <footer>
                  <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment/>
                
            </div>
     </article>
    )
}
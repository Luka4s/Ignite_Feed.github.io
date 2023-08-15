import style from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Newspaper } from "phosphor-react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post Muito bacana"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  //Criar novo comentário
  function HandleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={style.authorInfo}>
            <strong>{author.nome}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime="2023-07-05 18:52:50">
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((Line) => {
          if (Line.type === "paragraph") {
            return <p key={Line.content}>{Line.content}</p>;
          } else if (Line.type === "Link") {
            return (
              <p key={Line.content}>
                <a href="">{Line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={HandleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comments) => {
          return <Comment key={comments} content={comments} />;
        })}
      </div>
    </article>
  );
}

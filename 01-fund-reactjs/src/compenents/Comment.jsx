import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state)=> {
            return state + 1
        });
    }

    function handleDeleteComment() {
        onDeleteComment (content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}  src="https://github.com/Fukuchi098.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diegos Fernandes</strong>
                            <time title="16 de janeiro de 2023 às 12:30h" dateTime='2023-01-16 12:30:43'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick= {handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <img className={ styles.avatar } src="https://github.com/Fukuchi098.png"/>
                    <div className={ styles.authorInfo }>
                        <strong>Thiago Fukuchi</strong>
                        <span>Web Devoloper</span>
                    </div>
                </div>
                <time title="16 de janeiro de 2023 às 12:30h" dateTime='2023-01-16 12:30:43'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>


            <form className={ styles.commentForm }>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}
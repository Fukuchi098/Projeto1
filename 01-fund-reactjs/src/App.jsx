import { Header } from './compenents/Header';
import { Sidebar } from './compenents/Sidebar';
import { Post } from './compenents/Post';

import styles from './App.module.css';

import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-01-17 13:41:11'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/fukuchi098.png',
            name: 'Thiago Fukuchi',
            role: 'Student'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-01-14 13:41:11'),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={ styles.wrapper }>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id} 
                                author = {post.author}
                                content = {post.content}
                                publishedAt = {post.publishedAt}    
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}
import { Header } from './compenents/Header';
import { Sidebar } from './compenents/Sidebar';
import { Post } from './compenents/Post';
import { Comment } from './compenents/Comment';

import styles from './App.module.css';

import './global.css';

export function App() {
    return (
        <div>
            <Header />

            <div className={ styles.wrapper }>
                <Sidebar />
                <main>
                    <Post />
                    <Post />
                    <Post />
                </main>
            </div>
        </div>
    )
}
import React from 'react';
import Styles from './styles.module.css';
import NoteCard from './NoteCard/index';
function Board() {
    return (
        <div className={Styles.board_container}>
            <div className={`${Styles.created} ${Styles.column}`}>
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
            </div>
            <div className={`${Styles.progress } ${Styles.column}`}></div>
            <div className={`${Styles.completed} ${Styles.column}`}></div>
        </div>
    )
}

export default Board;

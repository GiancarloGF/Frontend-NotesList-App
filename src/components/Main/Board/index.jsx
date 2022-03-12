import React, { useEffect } from 'react';
import Styles from './styles.module.css';
import NoteCard from './NoteCard/index';
import NewNoteCard from './NewNoteCard/index';

import { getNotesAction } from '../../../store/features/notes/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
// import noteService from "../../../../services/notesService";
function Board() {
	const dispatch = useDispatch();
	// const state = useSelector((state) => state);
	// console.log(state);
	let allNotes = useSelector((state) => state.notes.notes);
	useEffect(() => {
		dispatch(getNotesAction());
	}, [dispatch]);

	return (
		<div className={Styles.board_container}>
			<h4>CREADOS</h4>
			<div className={`${Styles.created} ${Styles.column}`}>
				<NewNoteCard />
				{allNotes.map((note) => {
					if (note.status === 'created') {
						return (
							<NoteCard
								key={note.id}
								isImportant={note.important}
								comment={note.comment}
								title={note.title}
								status={note.status}
								date={note.date}
								id={note.id}
							/>
						);
					}
				})}
			</div>
			<h4>EN PROGRESO</h4>
			<div className={`${Styles.progress} ${Styles.column}`}>
				{allNotes.map((note) => {
					if (note.status === 'in_progress') {
						return (
							<NoteCard
								key={note.id}
								isImportant={note.important}
								comment={note.comment}
								title={note.title}
								status={note.status}
								date={note.date}
								id={note.id}
							/>
						);
					}
				})}
			</div>
			<h4>COMPLETADOS</h4>
			<div className={`${Styles.completed} ${Styles.column}`}>
				{allNotes.map((note) => {
					if (note.status === 'completed') {
						return (
							<NoteCard
								key={note.id}
								isImportant={note.important}
								comment={note.comment}
								title={note.title}
								status={note.status}
								date={note.date}
								id={note.id}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}

export default Board;

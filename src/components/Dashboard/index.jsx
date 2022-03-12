import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Styles from './styles.module.css';
import Menu from '../Menu/index';
import Main from '../Main/index.jsx';
import noteService from '../../services/notesService';
import BottomNav from '../BottomNav';
function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isMenuActive = useSelector((state) => state.isMenuActive);
	const color_theme = useSelector((state) => state.colorTheme);
	const notification = useSelector((state) => state.notification);

	useEffect(() => {
		const localUser = window.localStorage.getItem('loggedNoteappUser');
		if (localUser) {
			const user = JSON.parse(localUser);
			noteService.setToken(user.token); //Set token to auth
			dispatch({ type: 'USER/SET_USER', payload: user });
		} else {
			navigate('/');
		}
	}, []);

	return (
		<main
			className={`${Styles.dashboard_container} ${
				isMenuActive && Styles.menu_active
			} ${Styles[color_theme]}`}>
			{notification.message !== null && (
				<div
					className={`${Styles.notification} ${Styles[notification.status]}`}>
					{notification.message}
				</div>
			)}
			<Menu />
			<Main />
			<BottomNav />
		</main>
	);
}

export default Dashboard;

import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from './styles.module.css';

import {
	// BiNote,
	BiPlus,
	BiLogOutCircle,
	// BiCog
} from 'react-icons/bi';
import {
	MdDashboard,
	// MdOutlineNotificationsNone,
	// MdLightMode,
	// MdModeNight,
} from 'react-icons/md';

function BottomNav() {
	const [value, setValue] = React.useState(0);
	const onLogoutHandler = () => {
		localStorage.removeItem('loggedNoteappUser');
		window.location.href = '/';
	};
	return (
		<Box sx={{ width: 500 }} className={styles.container}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction label='Dashboard' icon={<MdDashboard />} />
				<BottomNavigationAction label='New Note' icon={<BiPlus />} />
				<BottomNavigationAction label='Logout' icon={<BiLogOutCircle onClick={onLogoutHandler}/>} />
			</BottomNavigation>
		</Box>
	);
}

export default BottomNav;

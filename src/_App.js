import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './components/Welcome/index';
import Dashboard from './components/Dashboard/index';
import GeneralReport from './components/GeneralReport/index';
import Notes from './components/Notes/index';
import NewNote from './components/NewNote/index';
import Setting from './components/Setting/index';
import Notifications from './components/Notifications/index';
function _App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                
                <Route path="/dashboard/" element={<Dashboard/>}>
                    <Route path="" element={<GeneralReport/>}/>
                    <Route path="notes" element={<Notes/>}/>
                    <Route path="new_note" element={<NewNote/>}/>
                    <Route path="notifications" element={<Notifications/>}/>
                    <Route path="settings" element={<Setting/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default _App;

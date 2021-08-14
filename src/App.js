import React from 'react';
import { useRecoilState } from 'recoil';
import Router from './router';
import { background } from './store';

function App(props) {
    const [currentTheme, setCurrentTheme] = useRecoilState(background)
    const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'

    return (
        <div className={`${defaultTheme} vh-100`}>
            <Router/>             
        </div>
    );
}

export default App;
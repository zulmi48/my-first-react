import React from 'react';
import { useRecoilState } from 'recoil';
import { background } from '../store';

function Theme(props) {
    const [currentTheme, setCurrentTheme] = useRecoilState(background)

    return (        
        <div className="container">
            <h5>Select Theme</h5>
            <div className="mt-4 col-md-2">
                <select value={currentTheme} onChange={(e)=>setCurrentTheme(e.target.value)} className="form-control">
                    <option value="dark">DARK</option>
                    <option value="light">LIGHT</option>
                </select>
            </div>
            <div className="mt-3">You're selecting the {currentTheme} theme </div>
        </div>    
    );
}

export default Theme;
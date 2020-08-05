import React from 'react';
import Image from 'react-bootstrap/Image'
import coverphoto from '../assets/cover.jpg';

function LeftPanel() {
    return (
        <div className="text-center">
            <h5 className="font-italic">Fire Your Stock Analyst!</h5>
            <div className="font-weight-lighter">
                <p>Growth investing is the process of idendifying strong, long tearm candidates.</p>
                <p>Use the tools on this site to quage the health of a prospective business investment.</p>
                <p></p>
            </div>
            <Image src={coverphoto} fluid thumbnail />
                <div className="font-italic">Analyzing stocks on your own
                <br/>
                isbn 0-13-035332-9
                </div>
        </div>

    )
}

export default LeftPanel;
import React from 'react';
import 'RaceEdit.css';
import RaceType from 'RaceType.js'

function RaceEdit() {
    return (
        <div className="race">
            <div className="race-head-pane">
                <div className="race-title">Saturday C 4</div>
                <div className="race-class">Dinghy</div>
                <div className="race-date">Sat 08 Aug 2020</div>
                <div className="race-handicap">Rolling Handicap</div>
                <RaceType />
            </div>
            <div className="race-edit-pane"></div>
        </div>
    );
}
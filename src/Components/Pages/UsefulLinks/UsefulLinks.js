import React from "react";
import "./UsefulLinks.scss";

export default class UsefulLinks extends React.Component {
    render() {
        return (
            <div className="UsefulLinks">
                <h2>Useful Links</h2>
                <a href="http://problemkaputt.de/gbatek.htm" target="_blank" rel="noreferrer">
                    <ul>GBATEK</ul>
                </a>
                <a href="https://github.com/isaact23/gba-helper" target="_blank" rel="noreferrer">
                    <ul>Github Repo</ul>
                </a>
                <p>More links coming soon!</p>
            </div>
        );
    }
}
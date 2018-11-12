import React from 'react';
import { NavLink } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super();
        console.log('props', props);
    }

    render() {
        return (
            <div className="Sidebar">
                <ul className="Nav">
                    <li className="Nav__item">
                        <NavLink to="/lookbook" className={this.setClassName}>Lookbook</NavLink>
                    </li>
                    <li className="Nav__item">
                        <NavLink to="/stocklist">Stocklist</NavLink>
                    </li>
                    <li className="Nav__item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className="Nav__item">
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li className="Nav__item">
                        <NavLink to="/materials">Materials</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

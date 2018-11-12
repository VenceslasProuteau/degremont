import React from 'react';
import moment from 'moment';
import {data} from './bookdates.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gallery from '../gallery/Gallery';

export default class extends React.Component {
    constructor(props){
        super();
        this.dates = data.map(data => ({
            label: moment(data, 'YYYYMMDD').format('LL'),
            id: data
        }));
    }

    render() {
        return this.dates.length > 0 &&
            <React.Fragment>
                <div className="Nav Lookbook">
                    {this.dates.map(({id, label}) =>
                        <Link 
                            to={`${this.props.match.url}/${id}`} 
                            className={'Nav__item'}
                            key={id}>
                            {label}
                        </Link>
                    )}
                </div>
                <Route path={`${this.props.match.path}/:id`} component={Gallery} />
            </React.Fragment>
    }
}
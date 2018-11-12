import React from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const fetchPictures = () => {
    const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'vence'});
    console.log(cloudinaryCore.config());
    const urlPath = cloudinaryCore.url('samples', {
        cloud_name: 'vence',
        format: 'json',
        type: 'list'
    });


    return fetch(urlPath)
        .then(res => res.json())
        .then(text => text);
}

export default class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            collection: [],
            id: props.match.params.id
        }
    }

    componentDidMount() {
        fetchPictures()
            .then(({resources}) => {
                this.setState({collection: resources})
            });
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const nextPropsId = nextProps.match.params.id;
        return nextPropsId !== prevState.id && {id: nextPropsId} || null;
    }
     
     componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            fetchPictures()
                .then(({resources}) => {
                    this.setState({
                        id: this.props.match.params.id,
                        collection: resources
                    });
            });
        }
     }

    render() {
        return this.state.collection.length > 0 &&
            <div>
                {this.state.collection.map((picture, index) =>
                    <Image cloudName="vence" publicId={picture.public_id} key={index} width="50"/>
                )}
            </div>
    }
}
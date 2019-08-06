import React, { Component } from 'react'
import VideoSubmit from './VideoSubmit'

export default class Transcriptor extends Component {
    constructor() {
        super();
        
        this.state = {
            video_link: ""
        }
    }

    submitLink = (id) => {
        this.setState({
            video_id: id
        });
        console.log(`Video ID recieved in transcriptor parent: ${id}`)

        //Test API call
        fetch(`/transcription/get/${id}`);
    }

    render() {
        return (
            <div>
                <VideoSubmit submitID={this.submitLink} />
            </div>
        )
    }
}

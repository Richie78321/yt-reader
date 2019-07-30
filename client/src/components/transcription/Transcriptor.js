import React, { Component } from 'react'
import VideoSubmit from './VideoSubmit'

export default class Transcriptor extends Component {
    constructor() {
        super();
        
        this.state = {
            video_link: ""
        }
    }

    submitLink = (link) => {
        this.setState({
            video_link: link
        });
        console.log(`Link recieved in transcriptor parent: ${link}`)
    }

    render() {
        return (
            <div>
                <VideoSubmit submitLink={this.submitLink} />
            </div>
        )
    }
}

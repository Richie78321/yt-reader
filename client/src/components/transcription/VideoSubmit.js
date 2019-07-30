import React, { Component } from 'react'

export default class VideoSubmit extends Component {
    constructor() {
        super();

        this.state = {
            video_link: ""
        }
    }
    
    onChange = (e) => this.setState({ video_link: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();

        //Determine if proper link, do formatting, etc.

        //Submit to parent
        this.props.submitLink(this.state.video_link);

        //Reset state
        this.setState({
            video_link: ""
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="youtube-link-input">YouTube video link</label>
                            <input type="text" className="form-control" id="youtube-link-input" placeholder="Enter video link" onChange={this.onChange} value={this.state.video_link}></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

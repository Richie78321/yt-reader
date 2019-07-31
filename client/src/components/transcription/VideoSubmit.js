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
        let id = this.isValidURL(this.state.video_link);
        if (id) {
            //Submit to parent
            this.props.submitID(id);

            //Reset state
            this.setState({
                video_link: ""
            });

            //Remove invalid class if present
            document.getElementById("youtube-link-input").classList.remove("is-invalid");
        }
        else {
            document.getElementById("youtube-link-input").classList.add("is-invalid");
        }
    }

    //StackOverflow Regex matching
    isValidURL = (url) => {
        var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var matches = url.match(p);
        if(matches) {
            return matches[1];
        }
        return false;
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="youtube-link-input">YouTube video link</label>
                            <input type="text" className="form-control" id="youtube-link-input" placeholder="Enter video link" onChange={this.onChange} value={this.state.video_link} />
                            <div className="invalid-feedback">
                                Invalid YouTube URL.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

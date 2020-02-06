import React from 'react';
import axios from 'axios';

const giphyUrl =
	'https://api.giphy.com/v1/gifs/search?api_key=KegZO7pGzdfIfjQZ0lD4mAUsX0aWzcqy&q=dark kirby&limit=25&offset=0&rating=G&lang=en';

class GiphyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			giphies: []
		};
	}

	render() {
		return (
			<div>
				<h1>Test</h1>
				<button onClick={this._getGiphy}>Click me</button>
			</div>
		);
	}

	_getGiphy = () => {
        axios
        .get(giphyUrl)
        .then(response => {
            console.log(response.data.data[1].images.downsized_large.url)
            this.setState({
                giphies: [ ...this.state.giphies, 
                    response.data.data[1].images.downsized_large.url]
            });
        })
        .catch(err => {
            console.log('No giphy available')
        });
		console.log('You clicked!');
	};
}

export default GiphyApp;

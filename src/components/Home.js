import React from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
//import renderHTML from 'react-render-html';
//import Moment from 'react-moment';
import { Link } from '@reach/router';
class Home extends React.Component{
    constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			posts: [],
			error: ''
		};
	}
    componentDidMount() {
	


		const wordPressSiteURL = 'https://wondwessenhaileinnovates.net';

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/` )
				.then( res => {
                    console.warn(res.data);
					if ( 200 === res.status ) {
						if ( res.data.length ) {
							this.setState( { loading: false, posts: res.data } );
						} else {
							this.setState( { loading: false, error: 'No Posts Found' } );
						}
					}

				} )
				.catch( err => this.setState( { loading: false, error: err } ) );
		} )
	}
    
    render(){
		const { loading, posts, error } = this.state;
		console.warn( posts );
        return(
            <div>
               <Navbar/>
			   { posts.length ? (
				<div className="mt-5 posts-container">
						{ posts.map( post => (
							<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
								<div className="card-header">
									<Link to={`/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
										{ post.title.rendered }
									</Link>
								</div>
								<div className="card-body">
								<div className="card-text post-content">{ renderHTML( post.excerpt.rendered ) }</div>
								</div>
								<div className="card-footer">
									{post.date}
									<Link to={`/post/${post.id}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
										Read More...
									</Link>
								</div>
							</div>
						) ) }
					</div>
				) : '' }
			   
        </div>
        )
    }
}

export default Home;
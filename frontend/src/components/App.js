import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
				<div class="row">
					<div class="col-sm-12">
						<h1>Readable</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-4">
						<h2>
							React
							<small>View categorie individually</small>
						</h2>
						{/* React categorie */}
					</div>
					<div class="col-sm-4">
						<h2>
							Redux
							<small>View categorie individually</small>
						</h2>
						{/* Redux categorie */}
					</div>
					<div class="col-sm-4">
						<h2>
							Udacity
							<small>View categorie individually</small>
						</h2>
						{/* Udacity categorie */}
					</div>
				</div>
			</div>
    );
  }
}

export default App;

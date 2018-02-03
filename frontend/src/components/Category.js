//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from '../actions';
//Router
import { Link } from 'react-router-dom';
//Components
import './App.css';
import CategoryPanel from './CategoryPanel';
//Content
const Category = ({ match }) => {
	const category = match.params.category;
  return(
		<div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3
			col-lg-offset-4">
			<h2>
				{category}
			</h2>
				<CategoryPanel
					category={category}
				/>
		</div>
	)
}

export default Category

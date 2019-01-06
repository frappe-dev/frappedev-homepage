import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addBlogArticle, deleteBlogArticle } from '../actions/BlogActions';
import BlogInputForm from '../components/BlogInputForm';
import BlogArticleCards from '../components/BlogArticleCards';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';

import ButtonAppBar from "../components/header";

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(index) {
    this.props.deleteBlogArticle(index)
  }

  render() {
    return (
      <div>
        <ButtonAppBar />
        <Typography variant="display3" gutterBottom>Frappe技術ブログ</Typography>
        <BlogInputForm onSubmit={this.props.addBlogArticle}/>
        <hr />
        <BlogArticleCards
          todoList={this.props.todoList}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  addBlogArticle: (blogArticle) => {
    dispatch(addBlogArticle(blogArticle))
    dispatch(reset('blogArticle'))
  },
  deleteBlogArticle: (index) =>  dispatch(deleteBlogArticle(index)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));

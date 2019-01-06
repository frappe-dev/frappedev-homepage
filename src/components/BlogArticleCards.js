import React from 'react';
import BlogArticleCard from './BlogArticleCard';

export default class TodoList extends React.Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
        {todoList.map((blogArticleCard, i) => (
          <BlogArticleCard
            key={i}
            title={blogArticleCard.title}
            description={blogArticleCard.description}
            handleDelete={this.props.handleDelete}
            index={i}
            />
        ))}
      </div>
    );
  }
}

import { actionNameList } from '../ActionNameList';

export const addBlogArticle = (blogArticleCard) => ({
  type: actionNameList.addBlogArticle,
  payload: {
    blogArticleCard
  }
})

export const deleteBlogArticle = (index) => ({
  type: actionNameList.deleteBlogArticle,
  payload: {
    id: index,
  }
})

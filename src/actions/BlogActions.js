import { actionNameList } from '../ActionNameList';

export const addBlogArticle = (todo) => ({
  type: actionNameList.addBlogArticle,
  payload: {
    todo
  }
})

export const deleteBlogArticle = (index) => ({
  type: actionNameList.deleteBlogArticle,
  payload: {
    id: index,
  }
})

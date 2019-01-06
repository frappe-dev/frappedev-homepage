import { actionNameList } from '../ActionNameList';
const initialState = [];

export default function todoListReducer(state=initialState, action) {
  switch (action.type) {
    case actionNameList.addBlogArticle:
      return [...state, action.payload.blogArticleCard];
    case actionNameList.deleteBlogArticle:
      state.splice(action.payload.id, 1);
      return [...state];
    default:
      return state;
  }
}

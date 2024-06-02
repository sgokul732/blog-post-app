import * as actionCreator from './actionCreator';
import { BlogActionType, BlogState } from './types';
const initialState: BlogState = { blogs: [], sideBlog: '', editPayload: null };

export function blogReducer(state = initialState, action: BlogActionType) {
  switch (action.type) {
    case actionCreator.addBlog:
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      };
    case actionCreator.editBlog: {
      const data = [...state.blogs];
      const index = data.findIndex((ele) => ele.title.localeCompare(action.payload.title) === 0);
      data[index] = { ...action.payload };
      return { ...state, blogs: data };
    }
    case actionCreator.deleteBlog: {
      const data = { ...state, blogs: [...state.blogs] };

      const index = data.blogs.findIndex(
        (ele) => ele.title.localeCompare(action.payload.title) === 0
      );
      data.blogs.splice(index, 1);
      return data;
    }
    case actionCreator.likeBlog: {
      const index = state.blogs.findIndex(
        (ele) => ele.title.localeCompare(action.payload.title) === 0
      );
      state.blogs[index].likes++;
      return { ...state, blogs: [...state.blogs] };
    }
    case actionCreator.sideBlog: {
      return { ...state, sideBlog: action.sideBar, editPayload: action.editPayload };
    }
    default: {
      return state;
    }
  }
}

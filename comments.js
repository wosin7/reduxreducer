import uuid from 'uuid'
import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'


const initialState = {
  list: []
}

function comments(state = [], action) {
switch(action.type) {
    case ADD_COMMENT:
        return  {
            ...state,
            list: [
                ...state.list,
                {
                    id: uuid.v4(),
                    text: action.text,
                    votes: 0
                }
            ]
        }

    case REMOVE_COMMENT:
        return {
            ...state,
            list: state.list.filter(comment => comment.id !== action.id)
        };
    case EDIT_COMMENT:
        return {
            ...state,
            list: state.list.map(comment => {
                if(comment.id == action.id){
                    return {
                        ...comment,
                        text: action.text
                    }
                }
                return comment})
        };

    case THUMB_UP_COMMENT:
        return {
            ...state,
            list: state.list.map(comment => {
                if (comment.id == action.id){
                    return {
                        ...comment,
                        votes: comment.votes + 1
                    }
                }
            })
        }
        
    case THUMB_DOWN_COMMENT:
        return {
            ...state,
            list: state.list.map(comment => {
                if (comment.id == action.id){
                    return {
                        ...comment,
                        votes: comment.votes - 1
                    }
                }
            })
        }
    default:
        return state;
    }
} 

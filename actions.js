export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
 

const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        votes: 0
    }
};

const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
};

const removeComment = (text, id) => {
    return {
        type: REMOVE_COMMENT,
        text,
        id
    }
};

const thumbUpComment = (thumb, id) => {
    return {
        type: THUMB_UP_COMMENT,
        votes: votes + 1,
        id
    }
};

const THUMB_DOWN_COMMENT = (thumb, id) => {
    return {
        type: THUMB_DOWN_COMMENT,
        votes: votes - 1,
        id
    }
};
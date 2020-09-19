import { handleError, handleResponse } from './apiUtils';

const baseUrl = process.env.REACT_APP_API_URL + "/authors";


export const getAuthors = () =>{
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};


export const saveAuthor = author => {
    return fetch( baseUrl + (author.id||""),{
        method: author.id ? "PUT" : "POST",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(author)
    })
    .then(handleResponse)
    .catch(handleError);
};



export const deleteAuthor = (authorId) => {
  return fetch(baseUrl + authorId, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
};
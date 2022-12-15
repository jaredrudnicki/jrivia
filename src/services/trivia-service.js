const URL = 'https://jrivia-node.onrender.com/rest/trivia';

export const findAllTrivia = () =>
  fetch(URL)
    .then(response => response.json());

export const deleteTrivia = (id) =>
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

export const createTrivia = (trivia) => 
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(trivia),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const findTriviaById = (id) =>
    fetch(`${URL}/id/${id}`)
      .then(response => response.json());

export const findTriviaByQuestion = (question) =>
      fetch(`${URL}/question/${question}`)
        .then(response => response.json());

export const updateTrivia = (trivia) =>
      fetch(`${URL}/${trivia._id}`, {
        method: 'PUT',
        body: JSON.stringify(trivia),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());

export const updateTriviaTally = (trivia) =>
    fetch(`${URL}/tally/${trivia._id}`, {
      method: 'PUT',
      body: JSON.stringify(trivia),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
    
  
  
export default {
    findAllTrivia, 
    deleteTrivia, 
    createTrivia, 
    findTriviaById,
    updateTrivia,
    findTriviaByQuestion,
    updateTriviaTally
};
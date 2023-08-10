import displayCommentsList from './display-comments.js';

async function addNewComment(itemId, username, comment) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  await response;

  const parent = document.querySelector('.comments-container-meal-popup'); // comments-container-meal-popup
  parent.innerHTML = '';
console.log(parent);
  displayCommentsList(itemId, parent);
}

export default addNewComment;

// import displayCommentsList from './display-comments.js';

// async function addNewComment(itemId, username, comment) {
//   const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
//   const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`;

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         item_id: itemId,
//         username,
//         comment,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Error adding new comment');
//     }

//     const parent = document.querySelector('.comments-container-meal-popup');
//     parent.innerHTML = '';

//     displayCommentsList(itemId, parent);
//   } catch (err) {
//     console.error('Error adding new comment:', err);
//   }
// }

// export default addNewComment;
// LHYarZybqm9V0G7OV772
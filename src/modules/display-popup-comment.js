// import addNewComment from './add-new-comment.js';
// import showCommentsList from './display-comments.js';

// const mainSection = document.querySelector('header');

// function popupComment(id) {
//   fetch(
//     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const meal = document.createElement('div');
//       meal.className = 'meal-popup';

//       const closeIcon = document.createElement('a');
//       closeIcon.className = 'meal-popup-close-icon fa fa-times';
//       meal.appendChild(closeIcon);

//       closeIcon.addEventListener('click', () => {
//         meal.remove();
//       });

//       const div = document.createElement('div');
//       div.className = 'meal-popup-div-img';
//       meal.appendChild(div);

//       const img = document.createElement('img');
//       img.src = `${data.meals[0].strMealThumb}`;
//       div.appendChild(img);

//       const p1 = document.createElement('h2');
//       p1.textContent = `${data.meals[0].strMeal}`;
//       meal.appendChild(p1);

//       const p2 = document.createElement('p');
//       p2.textContent = `Category: ${data.meals[0].strCategory}`;
//       meal.appendChild(p2);

//       const p3 = document.createElement('p');
//       p3.textContent = `Area: ${data.meals[0].strArea}`;
//       meal.appendChild(p3);

//       const d = document.createElement('p');
//       d.textContent = `${data.meals[0].strInstructions}`;
//       meal.appendChild(d);

//       // Comments
//       const commentsContainer = document.createElement('div');
//       commentsContainer.className = 'meal-popup-comments-container';
//       meal.appendChild(commentsContainer);

//       showCommentsList(id, commentsContainer);

//       const form = document.createElement('form');
//       form.className = 'meal-popup-add-comment-form';
//       meal.appendChild(form);

//       const formTitle = document.createElement('h3');
//       formTitle.className = 'meal-popup-add-comment-form-title';
//       formTitle.innerHTML = 'Add a comment';
//       form.appendChild(formTitle);

//       const formUsername = document.createElement('input');
//       formUsername.className = 'meal-popup-add-comment-form-username';
//       formUsername.setAttribute('placeholder', 'Your name');
//       form.appendChild(formUsername);

//       const formComment = document.createElement('textarea');
//       formComment.className = 'meal-popup-add-comment-form-comment';
//       formComment.setAttribute('placeholder', 'Your insights');
//       form.appendChild(formComment);

//       const formBtn = document.createElement('button');
//       formBtn.className = 'meal-popup-add-comment-form-btn';
//       formBtn.setAttribute('placeholder', 'Your comment');
//       formBtn.innerHTML = 'Comment';
//       form.appendChild(formBtn);

//       const formResContainer = document.createElement('p');
//       formResContainer.className = 'meal-popup-add-comment-form-res';
//       form.appendChild(formResContainer);

//       formBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (formUsername.value && formComment.value) {
//           addNewComment(id, formUsername.value, formComment.value);
//           formUsername.value = '';
//           formComment.value = '';
//         } else {
//           const formRes = document.createElement('p');
//           formRes.className = 'meal-popup-add-comment-form-res';
//           formRes.innerHTML = 'Username and comment should not be empty';
//           formResContainer.innerHTML = '';
//           formResContainer.appendChild(formRes);
//         }
//       });
//       mainSection.appendChild(meal);
//     });
// }

// export default popupComment;

import addNewComment from './add-new-comment.js';
import showCommentsList from './display-comments.js';

const mainSection = document.querySelector('header');

function createMealPopup(data, id) {
  const meal = document.createElement('div');
  meal.className = 'meal-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'meal-popup-close-icon fa fa-times';
  meal.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    meal.remove();
  });

  const div = document.createElement('div');
  div.className = 'meal-popup-div-img';
  meal.appendChild(div);

  const img = document.createElement('img');
  img.src = `${data.meals[0].strMealThumb}`;
  div.appendChild(img);

  const p1 = document.createElement('h2');
  p1.textContent = `${data.meals[0].strMeal}`;
  meal.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = `Category: ${data.meals[0].strCategory}`;
  meal.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = `Area: ${data.meals[0].strArea}`;
  meal.appendChild(p3);

  const d = document.createElement('p');
  d.textContent = `${data.meals[0].strInstructions}`;
  meal.appendChild(d);

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container-meal-popup';
  meal.appendChild(commentsContainer);

  showCommentsList(id, commentsContainer);

  const form = document.createElement('form');
  form.className = 'meal-popup-add-comment-form';
  meal.appendChild(form);

  const formTitle = document.createElement('h3');
  formTitle.className = 'meal-popup-add-comment-form-title';
  formTitle.innerHTML = 'Add a comment';
  form.appendChild(formTitle);

  const formUsername = document.createElement('input');
  formUsername.className = 'meal-popup-add-comment-form-username';
  formUsername.setAttribute('placeholder', 'Your name');
  form.appendChild(formUsername);

  const formComment = document.createElement('textarea');
  formComment.className = 'meal-popup-add-comment-form-comment';
  formComment.setAttribute('placeholder', 'Your insights');
  form.appendChild(formComment);

  const formBtn = document.createElement('button');
  formBtn.className = 'meal-popup-add-comment-form-btn';
  formBtn.innerHTML = 'Comment';
  form.appendChild(formBtn);

  const formResContainer = document.createElement('p');
  formResContainer.className = 'meal-popup-add-comment-form-res';
  form.appendChild(formResContainer);

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (formUsername.value && formComment.value) {
      addNewComment(id, formUsername.value, formComment.value);
      formUsername.value = '';
      formComment.value = '';
    } else {
      const formRes = document.createElement('p');
      formRes.className = 'meal-popup-add-comment-form-res';
      formRes.innerHTML = 'Username and comment should not be empty';
      formResContainer.innerHTML = '';
      formResContainer.appendChild(formRes);
    }
  });

  return meal;
}

function popupComment(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => {
      const mealPopup = createMealPopup(data, id);
      mainSection.appendChild(mealPopup);
    });
}

export default popupComment;

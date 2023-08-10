// function showPopupCategories() {
//   fetch(
//     'https://www.themealdb.com/api/json/v1/1/categories.php',
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const mainSection = document.querySelector('header');
//       const cat = document.createElement('div');
//       cat.className = 'cat-popup';

//       const closeIcon = document.createElement('a');
//       closeIcon.className = 'cat-popup-close-icon fa fa-times';
//       cat.appendChild(closeIcon);

//       closeIcon.addEventListener('click', () => {
//         cat.remove();
//       });

//       data.categories.forEach((dataCat) => {
//         const div = document.createElement('div');
//         div.className = 'cat-popup-div';
//         cat.appendChild(div);

//         const divImg = document.createElement('div');
//         divImg.className = 'cat-popup-div-img';
//         cat.appendChild(divImg);

//         const img = document.createElement('img');
//         img.src = `${dataCat.strCategoryThumb}`;
//         div.appendChild(img);

//         const p1 = document.createElement('h2');
//         p1.textContent = `${dataCat.strCategory}`;
//         div.appendChild(p1);

//         mainSection.appendChild(cat);
//       });
//     });
// }

// export default showPopupCategories;

async function showPopupCategories() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    const mainSection = document.querySelector('header');

    const cat = document.createElement('div');
    cat.className = 'cat-popup';

    const closeIcon = document.createElement('a');
    closeIcon.className = 'cat-popup-close-icon fa fa-times';
    cat.appendChild(closeIcon);

    closeIcon.addEventListener('click', () => {
      cat.remove();
    });

    data.categories.forEach((dataCat) => {
      const div = document.createElement('div');
      div.className = 'cat-popup-div';
      cat.appendChild(div);

      const divImg = document.createElement('div');
      divImg.className = 'cat-popup-div-img';
      cat.appendChild(divImg);

      const img = document.createElement('img');
      img.src = dataCat.strCategoryThumb;
      div.appendChild(img);

      const p1 = document.createElement('h2');
      p1.textContent = dataCat.strCategory;
      div.appendChild(p1);

      mainSection.appendChild(cat);
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export default showPopupCategories;

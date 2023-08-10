const count = () => {
  const box = document.getElementById('meal-data');

  const directChildren = box.children.length;
  const cat = document.getElementById('meals');
  cat.innerHTML = `Meals (${directChildren - 1})`;
};

export default count;

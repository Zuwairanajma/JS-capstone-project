// const showPopupContacts = () => {
//   const mainSection = document.querySelector('header');
//   const cont = document.createElement('div');
//   cont.className = 'cont-popup';

//   const closeIcon = document.createElement('a');
//   closeIcon.className = 'cont-popup-close-icon fa fa-times';
//   cont.appendChild(closeIcon);

//   closeIcon.addEventListener('click', () => {
//     cont.remove();
//   });

//   const div = document.createElement('div');
//   div.className = 'cont-popup-div';
//   cont.appendChild(div);

//   const h = document.createElement('h2');
//   h.textContent = 'Contacts:';
//   div.appendChild(h);

//   const p = document.createElement('p');
//   p.className = 'cont-popup-p';
//   p.innerHTML = `
//   👤 Roshdy Mohamed <br>
//       GitHub: @MohamedRoshdy2021 <br>
//       <a href="https://www.linkedin.com/in/mohammed-elkhadragy-2b58b6215/" target>LinkedIn</a> <br>
//       <br>
//   👤 Noel FOKA <br>
//     GitHub: @noelfoka <br>
//     Twitter: @noelnomgne <br>
//     <a href="https://www.linkedin.com/in/no%C3%ABl-nomgne-foka-063013231/" target>LinkedIn</a> <br>
//     `;
//   div.appendChild(p);

//   mainSection.appendChild(cont);
// };

// export default showPopupContacts;

const showPopupContacts = () => {
  const mainSection = document.querySelector('header');

  const cont = document.createElement('div');
  cont.className = 'cont-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cont-popup-close-icon fa fa-times';
  cont.appendChild(closeIcon);

  const div = document.createElement('div');
  div.className = 'cont-popup-div';
  cont.appendChild(div);

  const h = document.createElement('h2');
  h.textContent = 'Contacts:';
  div.appendChild(h);

  const createContact = (name, github, twitter, linkedin) => {
    const p = document.createElement('p');
    p.className = 'cont-popup-p';
    p.innerHTML = `
      👤 ${name} <br>
      GitHub: @${github} <br>
      ${twitter ? `Twitter: @${twitter} <br>` : ''}
      <a href="${linkedin}" target>LinkedIn</a> <br>
      <br>
    `;
    div.appendChild(p);
  };

  createContact(
    'Zuwaira Enehuwa Sadiq',
    'Zuwairanajma',
    null,
    'https://www.linkedin.com/in/zuwaira-sadiq-566b891b0?',
  );

  createContact(
    'Albert Kantwi',
    'noelfoka',
    'noelnomgne',
    'https://www.linkedin.com/in/no%C3%ABl-nomgne-foka-063013231/',
  );

  closeIcon.addEventListener('click', () => {
    cont.remove();
  });

  mainSection.appendChild(cont);
};

export default showPopupContacts;

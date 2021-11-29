const DevCard = (imgSrc, name, description, githubUserName = '#') => {
   const view = `
      <li class="user">
        <a href="https://github.com/${githubUserName}">
          <img src="${imgSrc}" class="img-user" />
        </a>
        <div class="user-text">
          <div class="h1-creditos">
            <h2>${name}</h2>
          </div>
          <div class="p-creditos">
            <p>${description}</p>
          </div>
        </div>
      </li>
   `;
   return view;
}

export default DevCard;

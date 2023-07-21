const template = document.querySelector('#card-container');
const cardContainer = document.querySelector('.card-container');
let validated = false;

document.getElementById('form-email').addEventListener('submit', function (event) {
  event.preventDefault();

  if (!validated) {
    validated = true;
    cardContainer.classList.add('dimiss');
    template.innerHTML = `
      <div class="dimis-container">
        <div class="text-container--dimiss">
          <img class="img-success" src="./assets/images/icon-success.svg" alt="">
          <h2 class="thanks">Thanks for subscribing</h2>
          <p class="confirmation-paragraph">A confirmation email has been sent to your email address. Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button class="dimiss-btn">Dismiss message</button>
      </div>
    `;
  }

  const btnDimiss = document.querySelector('.dimiss-btn');
  
  if (validated) {
    btnDimiss.addEventListener('click', () => {
      validated = false;
      cardContainer.classList.remove('dimiss');
      template.innerHTML = `
        <div class="image-container">
          <img src="./assets/images/illustration-sign-up-mobile.svg" alt="Image 1" class="image-small">
          <img src="./assets/images/illustration-sign-up-desktop.svg" alt="Image 2" class="image-large">
        </div>
        <div class="box1">
          <h2 class="titleFirst">
            Stay updated!
          </h2>
          <p class="pe-text"> 
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul class="list">
            <li class="list-li">
              Product discovery and building what matters
            </li>
            <li class="list-li">
              Measuring to ensure updates are a success
            </li>
            <li class="list-li">
              And much more!
            </li>
          </ul>
          <form class="form-email" id="form-email">
            <input type="email" placeholder="yourname@company.com" required id="emailInput" class="input-email">
            <input type="submit" value="Subscribe to monthly newsletter">
          </form>
        </div>
      `;
    });
  }
});

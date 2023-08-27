const block = document.querySelector(".block");

const array = [
  {
    title: `Block Title 1`,
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              omnis quae, quo eos fugit ratione ullam fugiat labore culpa
              dolorum id provident autem quas nesciunt maxime repellendus?
              Voluptas, neque aliquam!`,
    img: `img/img_1.webp`,
    elNumber: `1`,
  },
  {
    title: `Block Title 2`,
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              omnis quae, quo eos fugit ratione ullam fugiat labore culpa
              dolorum id provident autem quas nesciunt maxime repellendus?
              Voluptas, neque aliquam!`,
    img: `img/img_2.jpg`,
    elNumber: `2`,
  },
  {
    title: `Block Title 3`,
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              omnis quae, quo eos fugit ratione ullam fugiat labore culpa
              dolorum id provident autem quas nesciunt maxime repellendus?
              Voluptas, neque aliquam!`,
    img: `img/img_3.webp`,
    elNumber: `3`,
  },
];
document.addEventListener("DOMContentLoaded", function Func() {
  const tabNumber = prompt(`choose 1, 2 or 3 block`);
  array.forEach((tab) => {
    if (tabNumber === tab.elNumber) {
      block.innerHTML = `
      <div class="block__container">
        <div class="block__content">
          <div class="block__cta">
            <h2 class="block__title">${tab.title}</h2>
            <p class="block__text">
             ${tab.text}
            </p>
            <a href="#" class="block__link">Read More</a>
          </div>
          <div class="block__img-wrapper">
            <img src="${tab.img}" alt="" class="block__img" />
          </div>
        </div>
      </div>`;
    }
  });
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  window.location.reload();
});

const productCard = document.getElementById("product-card");
const loaders = document.getElementById("loader");
const input = document.getElementById("input");
const button = document.getElementById("button");

const loader = document.createElement("img");
loader.src = "https://miro.medium.com/max/1400/0*ptDX0HfJCYpo9Pcs.gif";
loader.style.width = "200px";
loaders.style.margin = "0 auto";
loaders.style.paddingBottom = "5rem";

let products = [];
let limit = 5;
let isShowDetail = false;

function truncate(text, number) {
  if (text.length > number) {
    return text.slice(0, number) + ".....";
  }
  return text;
}

button.onclick = (e) => {
  e.preventDefault()
  isShowDetail = false;
  switch (true) {
    case input.value !== "":
      limit = "";
      productCard.innerHTML = "";
      products = [];
      getAllProducts();
      break;
    case input.value === "":
      limit = 5;
      products = [];
      productCard.innerHTML = "";
      getAllProducts();
      break;
    default:
      break;
  }
}

window.addEventListener("scroll", () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

  if (clientHeight + scrollTop >= scrollHeight) {
    if (!isShowDetail) {
      loaders.append(loader);
      limit += 5;

      async function addLimit() {
        fetch(
          `https://dummyjson.com/products/search?limit=${limit}&q=` +
            input.value
        )
          .then((res) => res.json())
          .then((res) => {
            productCard.innerHTML = "";
            loaders.innerHTML = "";
            products = [];
            products.push(res.products);
            products[0].forEach((product, i) => {
              const div = document.createElement("div");
              const img = document.createElement("img");
              img.src = product.thumbnail;
              const title = document.createElement("h3");
              title.textContent = truncate(product.title, 25);
              const description = document.createElement("span");
              description.textContent = truncate(product.description, 50);
              const price = document.createElement("p");
              price.textContent = "$" + product.price;

              div.style.width = "100%";
              div.style.border = "2px solid #eaeaea";
              div.style.borderRadius = "0.3rem";
              div.style.padding = "1rem 1.5rem";
              div.style.display = "flex";
              div.style.gap = "1rem";
              div.style.cursor = "pointer";

              img.style.width = "100px";
              img.style.height = "100px";

              const textWrapper = document.createElement("div");
              textWrapper.append(title, price, description);

              div.append(img, textWrapper);

              productCard.append(div);
              div.onclick = () => {
                isShowDetail = true;

                productCard.innerHTML = "";
                div.innerHTML = "";
                img.src = product.thumbnail;
                title.textContent = product.title;
                price.textContent = "Price $" + product.price;
                description.textContent = product.description;

                const rating = document.createElement("p");
                rating.textContent = "rating " + product.rating;

                const stock = document.createElement("p");
                stock.textContent = "stock " + product.stock;

                const back = document.createElement("h4");
                back.textContent = "Back to home";

                div.style.display = "block";
                div.style.border = "none";
                div.style.cursor = "";

                img.style.width = "100%";
                img.style.height = "auto";

                title.style.fontSize = "2rem";

                back.style.margin = "1rem 0 2rem 0";
                back.style.cursor = "pointer";
                back.style.width = "fit-content";

                back.onclick = () => {
                  productCard.innerHTML = "";
                  div.innerHTML = "";
                  setTimeout(() => {
                    isShowDetail = false;
                    handleSearch();
                  }, 300);
                };

                div.append(back, img, title, price, rating, stock, description);
                productCard.append(div);
              };
            });
          });
      }

      addLimit();
    }
  }
});

async function getAllProducts() {
  productCard.innerHTML = "";
  loaders.append(loader);
  await fetch(
    `https://dummyjson.com/products/search?${"limit=" + limit}&q=` + input.value
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.total === 0) {
        loaders.innerHTML = "";
        productCard.textContent = "Product Not Found 😪";
      } else {
        loaders.innerHTML = "";
        products.push(res.products);
        products[0].forEach((product, i) => {
          const div = document.createElement("div");
          const img = document.createElement("img");
          img.src = product.thumbnail;
          const title = document.createElement("h3");
          title.textContent = truncate(product.title, 25);
          const description = document.createElement("span");
          description.textContent = truncate(product.description, 50);
          const price = document.createElement("p");
          price.textContent = "$" + product.price;

          div.style.width = "100%";
          div.style.border = "2px solid #eaeaea";
          div.style.borderRadius = "0.3rem";
          div.style.padding = "1rem 1.5rem";
          div.style.display = "flex";
          div.style.gap = "1rem";
          div.style.cursor = "pointer";

          img.style.width = "100px";
          img.style.height = "100px";

          const textWrapper = document.createElement("div");
          textWrapper.append(title, price, description);

          div.append(img, textWrapper);

          div.onclick = () => {
            isShowDetail = true;

            productCard.innerHTML = "";
            div.innerHTML = "";
            img.src = product.thumbnail;
            title.textContent = product.title;
            price.textContent = "Price $" + product.price;
            description.textContent = product.description;

            const rating = document.createElement("p");
            rating.textContent = "rating " + product.rating;

            const stock = document.createElement("p");
            stock.textContent = "stock " + product.stock;

            const back = document.createElement("h4");
            back.style.width = "fit-content";
            back.textContent = "Back to home";

            div.style.display = "block";
            div.style.border = "none";
            div.style.cursor = "";

            img.style.width = "100%";
            img.style.height = "auto";

            title.style.fontSize = "2rem";

            back.style.margin = "1rem 0 2rem 0";
            back.style.cursor = "pointer";

            back.onclick = () => {
              productCard.innerHTML = "";
              div.innerHTML = "";
              setTimeout(() => {
                isShowDetail = false;
                handleSearch();
              }, 300);
            };

            div.append(back, img, title, price, rating, stock, description);
            productCard.append(div);
          };

          productCard.append(div);
        });
      }
    });
}

getAllProducts();

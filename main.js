const menu = document.getElementById("menu");
const button = document.getElementById("button");

button.onclick = function() {
    menu.classList.toggle("hidden");
}

const id = new URLSearchParams(window.location.search).get("id");

const products = [{
        id: 1,
        title: "Designing Dashboards",
        year: 2020,
        infor1: "Dashboard",
        infor2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
        img: "imgs/Rectangle 30.jpg"
    },
    {

        id: 2,
        title: "Vibrant Portraits of 2020",
        year: 2018,
        infor1: "Illustration",
        infor2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
        img: "imgs/Rectangle 32.jpg"

    },
    {
        id: 3,
        title: "36 Days of Malayalam type",
        year: 2018,
        infor1: "DTypography",
        infor2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
        img: "imgs/Rectangle 34.jpg"
    },
    {
        id: 4,
        title: "Components",
        year: 2018,
        infor1: "Components, Design",
        infor2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
        img: "imgs/Rectangle 30.jpg"
    }
]

const found = products.find(function(element) {
    return element.id == id;
});
console.log(found);

if (found) {

    document.getElementById("production").innerHTML = `
            <div class="max-w-[681px] mx-auto">
                <h2 class="text-[34px] font-bold">${found.title}</h2>
                <div class="flex space-x-5 py-5">
                    <a href="" class="inline-block rounded-full bg-red-500 text-white font-bold px-3">${found.year}</a>
                    <span class="text-[#8695A4]">${found.infor1}</span>
                </div>
                <p>${found.infor2}</p>
                <img src="${found.img}" alt="" class="w-full mt-2">
            </div>
         `;
}

function listProduct(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        result +=
            `
            <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8 py-5">
               <a href="details.html?id=${products[i].id}">
               <div class="col-span-1">
                    <img src="${products[i].img}" alt="" class="w-full rounded-lg">
                </div>
                <div class="col-span-2">
                    <h2 class="text-3xl font-bold">${products[i].title}</h2>
                    <div class="flex space-x-4 py-5">
                        <a href="" class="inline-block rounded-full bg-black text-white font-bold px-3">${products[i].year}</a>
                        <span class="text-[#8695A4]">${products[i].infor1}</span>
                    </div>
                    <p class="">${products[i].infor2}</p>
                </div>
               </a>
            </div>
            <hr>
        `;
    }
    return result;
};



function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}

render("product", listProduct(products));
//link :  https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}
const api = "xiXp4Hahgf3a7xB_KYPAm2vX0ABEvfnRFgzd7ptZlkg";

import { navbar } from "../components/navbar.js";
let n = document.getElementById('navbar');
n.innerHTML = navbar();

import { searchImages, append } from "./fetch.js";

let search = (e) => {
    if (e.key === "Enter") {
        let value = document.getElementById("query").value;
        
        searchImages(api, value).then((data) => {
            console.log(data);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });
    }
};

document.getElementById('query').addEventListener("keydown", search);

let categories = document.getElementById("categories").children;
// console.log(categories)
for (let el of categories) {
    el.addEventListener("click", cSearch);
}

function cSearch() {
    console.log(this.id);
    searchImages(api, this.id).then((data) => {
        console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
}

// let searchImages = async () => {
//     let value = document.getElementById("query").value;
//     try {
//         let res = fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}`);

//         let data = await res.json();
//     }
//     catch (err) {
//         console.log(err)
//     }
// };
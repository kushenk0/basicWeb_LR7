import React from "react"

function Image() {
    const add = () => {
        const container = document.querySelector(".img")
        const img_link = document.createElement("a")
        const img = document.createElement("img")

        img_link.setAttribute("href", "https://en.parisinfo.com/");
        img.setAttribute("src", "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/2-Old_city_of_Lviv-e1561514227227.jpg");


        img_link.appendChild(img);
        container.appendChild(img_link);
    }

    const size_up = () => {
        const img_link = document.querySelector("a:last-child");
        const img = img_link.firstElementChild;
        img.style.height = (img.clientHeight * 1.5).toString() + "px";
    }

    const size_down = () => {
        const img_link = document.querySelector("a:last-child");
        const img = img_link.firstElementChild;
        img.style.height = (img.clientHeight * 0.75).toString() + "px";
    }

    const del = () => {
        const container = document.querySelector(".img");
        container.removeChild(container.lastChild);
    }

    return (
        <div class="container">
            <div class="img">
                <a href="https://uk.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2">
                    <img src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/2-Old_city_of_Lviv-e1561514227227.jpg" alt="" />
                </a>
            </div>
            <div class="buttons">
                <button onClick={add}>Додати</button>
                <button onClick={size_up}>Збільшити</button>
                <button onClick={size_down}>Зменшити</button>
                <button onClick={del}>Видалити</button>
            </div>
        </div>
    )
}

export default Image

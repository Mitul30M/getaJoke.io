const linkIcon = document.querySelector("link");
linkIcon.href = `memojis${Math.floor(Math.random() * 3) + 1}/1 (${Math.floor(Math.random() * 45) + 1}).svg`;

const main = document.querySelector(".main");
const btn = document.querySelector("button");

btn.classList.add("onhover");


const jokeText = document.querySelector("#reply");

const baseUrl = "memojis";

const card = document.querySelector("#joke")
card.style.display = "none";
const close = document.querySelector("svg");


const imgs = document.querySelectorAll("img");






btn.addEventListener("click",
    async () => {

        const config = { headers: { Accept: 'application/json' } }
        jokeText.innerHTML = await axios.get("https://icanhazdadjoke.com/", config)

            .then((data) => {



                main.style.opacity = "0";
                card.style.display = "flex";
                card.style.boxShadow = "0px 30px 60px 0px rgba(0, 0, 0, 0.24)";
                if (card.classList.contains("popdown")) { card.classList.remove("popdown") }
                card.classList.add("popup");

                imgs.forEach((img) => {
                    img.src = `memojis${Math.floor(Math.random()*3)+1}/1 (${Math.floor(Math.random() * 45) + 1}).svg`;
                    img.style.display = "inline-block"
                    img.style.height = "23rem";
                    img.style.width = "23rem";
                   

                    console.log(img)
                })

                if (imgs[0].classList.contains("i0exit")) { imgs[0].classList.remove("i0exit") }
                imgs[0].classList.add("i0enter");

                if (imgs[1].classList.contains("i1exit")) { imgs[1].classList.remove("i1exit") }
                imgs[1].classList.add("i1enter");


                if (imgs[2].classList.contains("i2exit")) { imgs[2].classList.remove("i2exit") }
                imgs[2].classList.add("i2enter");

                if (imgs[3].classList.contains("i3exit")) { imgs[3].classList.remove("i3exit") }
                imgs[3].classList.add("i3enter");

                if (imgs[4].classList.contains("i4exit")) { imgs[4].classList.remove("i4exit") }
                imgs[4].classList.add("i4enter");

                if (imgs[5].classList.contains("i5exit")) { imgs[5].classList.remove("i5exit") }
                imgs[5].classList.add("i5enter");


                close.addEventListener("click", async () => {

                    imgs[0].classList.remove("i0enter");
                    imgs[0].classList.add("i0exit");

                    imgs[1].classList.remove("i1enter");
                    imgs[1].classList.add("i1exit");

                    imgs[2].classList.remove("i2enter");
                    imgs[2].classList.add("i2exit");

                    imgs[3].classList.remove("i3enter");
                    imgs[3].classList.add("i3exit");

                    imgs[4].classList.remove("i4enter");
                    imgs[4].classList.add("i4exit");

                    imgs[5].classList.remove("i5enter");
                    imgs[5].classList.add("i5exit");

                    card.classList.add("popdown");
                    setTimeout(() => {
                        card.style.boxShadow = "0";
                        main.style.opacity = "1";
                    }, 500)




                })

                return data.data.joke

            })

            .catch((err) => {

                console.log(err);

                main.style.opacity = "0";
                card.style.display = "flex";
                card.style.boxShadow = "0px 30px 60px 0px rgba(0, 0, 0, 0.24)";
                if (card.classList.contains("popdown")) { card.classList.remove("popdown") }
                card.classList.add("popup");

                imgs.forEach((img) => {
                    img.style.display = "inline-block"
                    img.style.height = "23rem";
                    img.style.width = "23rem";
                    img.src = `memojis${Math.floor(Math.random() * 3) + 1}/1 (${Math.floor(Math.random() * 45) + 1}).svg`;

                    console.log(img)
                })

                if (imgs[0].classList.contains("i0exit")) { imgs[0].classList.remove("i0exit") }
                imgs[0].classList.add("i0enter");

                if (imgs[1].classList.contains("i1exit")) { imgs[1].classList.remove("i1exit") }
                imgs[1].classList.add("i1enter");


                if (imgs[2].classList.contains("i2exit")) { imgs[2].classList.remove("i2exit") }
                imgs[2].classList.add("i2enter");

                if (imgs[3].classList.contains("i3exit")) { imgs[3].classList.remove("i3exit") }
                imgs[3].classList.add("i3enter");

                if (imgs[4].classList.contains("i4exit")) { imgs[4].classList.remove("i4exit") }
                imgs[4].classList.add("i4enter");

                if (imgs[5].classList.contains("i5exit")) { imgs[5].classList.remove("i5exit") }
                imgs[5].classList.add("i5enter");


                close.addEventListener("click", async () => {

                    imgs[0].classList.remove("i0enter");
                    imgs[0].classList.add("i0exit");

                    imgs[1].classList.remove("i1enter");
                    imgs[1].classList.add("i1exit");

                    imgs[2].classList.remove("i2enter");
                    imgs[2].classList.add("i2exit");

                    imgs[3].classList.remove("i3enter");
                    imgs[3].classList.add("i3exit");

                    imgs[4].classList.remove("i4enter");
                    imgs[4].classList.add("i4exit");

                    imgs[5].classList.remove("i5enter");
                    imgs[5].classList.add("i5exit");

                    card.classList.add("popdown");
                    setTimeout(() => {
                        card.style.boxShadow = "0";
                        main.style.opacity = "1";
                    }, 500)




                })

                return "I had a rough day, and then somebody went and ripped the front and back pages from my dictionary. It just goes from bad to worse.";
            });



    }
)



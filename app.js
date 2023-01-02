// let  response="https://api.tvmaze.com/search/shows?q=girls";

// const url="https://api.tvmaze.com/search/shows?q=girls";

const row =document.querySelector(".contier")
function loadjaon() {
    fetch("https://api.tvmaze.com/search/shows?q=girls")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                // card
                const card=document.createElement("div");
                const img=document.createElement("img")
                card.setAttribute("class","card");
                img.setAttribute("src",element.show.image.medium)
                    // console.log(element.show.image.medium);
                    card.append(img)
                    row.append(card)
                    const nameshow=document.createElement("h5");
                    nameshow.append(element.show.name);
                    card.append(nameshow);
                    // sesone number
                    // const seo=element.show.
                    const p=document.createElement("p");
                    p.append(element.show.summary);
                    card.append(p)
            })
        })
        .catch(error => {
            console.error("ERROR");
        })
}

loadjaon();













 
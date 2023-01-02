// let  response="https://api.tvmaze.com/search/shows?q=girls";

// const url="https://api.tvmaze.com/search/shows?q=girls";

const row = document.querySelector(".contier")
function loadjaon() {
    fetch("https://api.tvmaze.com/search/shows?q=girls")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                // card
                const card = document.createElement("div");
                const img = document.createElement("img")
                card.setAttribute("class", "card");
                img.setAttribute("src", element.show.image.medium)
                // console.log(element.show.image.medium);
                card.append(img)
                const nameshow = document.createElement("h5");
                nameshow.append(element.show.name);
                card.append(nameshow);
                
                const div=document.createElement("div");

               div.innerHTML=             
                `
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      summary...
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                          ${element.show.summary}
                     </div>
                    </div>
                    </div>
                    </div>
               
                    `;
                  card.append(div)
                    row.append(card)
     
            })
        })
        .catch(error => {
            console.error("ERROR");
        })
}

loadjaon();














async function pizza (){
    const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await res.json();
    const count = data.totalRes ;
    const food = data.recipes;
    const resalt = food.map(function(e){
        return `
        <div class="article">
        <h2>${e.title}</h2>
        <img src="${e.image_url}" alt="${e.title}">
        </div> `;
    }).join("");
    document.querySelector(".contant").innerHTML += resalt;
}
pizza();
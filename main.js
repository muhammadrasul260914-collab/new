const elList = document.querySelector(".list")

async function renderPost(){
    try{
        const javob = await fetch('https://rickandmortyapi.com/api/character');
        const malumot = await javob.json()
        renderTodo(malumot.results)
    }
    catch(xato){
console.error("Api bilan bog'liq xatolik", xato)
    }
}
renderPost()

function renderTodo(malumot){
    malumot.forEach((data)=>{
        elList.innerHTML += `
        <li class="li">
        <di class="div">
        <img class="img" src="${data.image}">
        <br>
        <span class="spn">${data.id}</span>
        <h2 class="h2">${data.name}</h2>
        <h3 class="h3">${data.status}</h3>
        <h3 class="h4">${data.species}</h3>
        <p class="p">${data.location.name}</p>
        <p class="p1">${data.location.url}</p>
        </li>       
        </di>
        `
    })
}
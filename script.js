// // TODO: add code here
// const init = async () => {
//     let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
//     response.json().then(json => {
//             let container = document.getElementById("container");
//             console.log(json)
//             for (let astronaut in json) {
//                 container.innerHTML += `<article class="astronaut">
//                 <div class="bio">
//                     <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
//                     <ul>
//                     <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
//                     <li>Active: ${json[astronaut].active}</li>
//                     <li>Skills: ${json[astronaut].skills}</li>
//                     </ul>
//                 </div>
//                 <img class="avatar" src="${json[astronaut].picture}">
//              </article>` 
//             }
//         })
// }
// window.addEventListener("load", init);


// const init = () => {
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => {
//         response.json().then(json => {
//             let container = document.getElementById("container");
//             console.log(json)
//             for (let astronaut in json) {
//                 container.innerHTML += `<article class="astronaut">
//                 <div class="bio">
//                     <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
//                     <ul>
//                     <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
//                     <li>Active: ${json[astronaut].active}</li>
//                     <li>Skills: ${json[astronaut].skills}</li>
//                     </ul>
//                 </div>
//                 <img class="avatar" src="${json[astronaut].picture}">
//              </article>` 
//             }
//         })
//     })
// }
// window.addEventListener("load", init);


// const init = async () => {
//     let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
//     let json = await response.json()
//     let container = document.getElementById("container");
//     console.log(json)
//     for (let astronaut in json) {
//         container.innerHTML += `<article class="astronaut">
//         <div class="bio">
//             <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
//             <ul>
//             <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
//             <li>Active: ${json[astronaut].active}</li>
//             <li>Skills: ${json[astronaut].skills}</li>
//             </ul>
//         </div>
//          <img class="avatar" src="${json[astronaut].picture}">
//         </article>` 
//     }
// }

window.addEventListener("load", async () => {
    let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    let json = await response.json()
    let container = document.getElementById("container");
    let numOfAstronauts = 0
    console.log(json)
    for (let astronaut in json) {
        numOfAstronauts++
        container.innerHTML += `<article class="astronaut">
        <div class="bio">
            <h3>${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
            <ul>
            <li>Hours in space: ${json[astronaut].hoursInSpace}</li>
            <li id="${json[astronaut].id}">Active: ${json[astronaut].active}</li>
            <li>Skills: ${json[astronaut].skills}</li>
            </ul>
        </div>
         <img class="avatar" src="${json[astronaut].picture}">
        </article>`
        let isActive = json[astronaut]
        console.log(isActive)
        if (json[astronaut].active === true) {
            let text = document.getElementById(`${json[astronaut].id}`);
            console.log(text)
            text.style.color = "green";
        }
    }
    document.getElementById("astronautNum").innerHTML = `Number of astronauts ${numOfAstronauts}`
});
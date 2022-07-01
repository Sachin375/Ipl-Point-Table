let url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

fetch(url).then((resolve)=>{
    return resolve.json();
}).then((object)=>{
console.log(object);
let tBody = document.querySelector("tbody");
object.sort(function(a, b){
   if(a.NRR < b.NRR){
    return -1;
   }
   if(a.NRR > b.NRR){
    return 1;
   }
   return 0;
})
object.map((item)=>{
    tBody.innerHTML += `
    <tr>
    <td style="background-color: #f1f1f1">${item.No}</td>
    <td>${item.Team}</td>
    <td>${item.Matches}</td>
    <td>${item.Won}</td>
    <td>${item.Lost}</td>
    <td>${item.Tied}</td>
    <td>${item.NRR}</td>
    <td style="background-color: #d1d1d1">${item.Points}</td>
    </tr>
    `
})

})

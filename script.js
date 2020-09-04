// TODO: add code here
window.addEventListener('load', function(){
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(URL).then(function(response){
        response.json().then(function(json){
            console.log(json);
            json.sort(function(a, b){
                return a.hoursInSpace - b.hoursInSpace;
            });
            const container = document.getElementById("container")
            const totalAstronauts = document.getElementById('total')
            totalAstronauts.textContent = "(Total: " + json.length + ")"
            for (let i = 0; i < json.length; i++) {
                if (json[i].active){
                    color="color:green"
                }
                else{
                    color=""
                }
                console.log(color)
                
                container.innerHTML += `
                                <div class="astronaut">
                                <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                
                                    <li style="${color}">Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills.join(", ")}</li>
                                </ul>
                                </div>
                                <img class="avatar" src="${json[i].picture}">
                            </div> `;         

            }    
        })

    })
})
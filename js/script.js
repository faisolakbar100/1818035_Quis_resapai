const apikey= "bf3c404fc0msh808b5d8586678c7p1f0272jsna38931b23601";
const baseUrl = " https://mmo-games.p.rapidapi.com/";

const teamEndPoin = `${baseUrl}games`;
const standingEndPoin = `${baseUrl}giveaways`;
const matchEndPoin = `${baseUrl}latestnews`;

const contents = document.querySelector("#content-list");
const title = document.querySelector(".card-title");
const fetchHeader = {
    headers: {
        'x-rapidapi-key': apikey
    }
};

function getListTeams() {
    title.innerHTML = "Daftar Games"
    fetch(teamEndPoin, fetchHeader)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
            let data = "";
            resJson.forEach(team => {
                data += `
                
                <div class="col m12">
                <h2 class="header">${team.title}</h2>
                <div class="card horizontal">
                    <div class="card-image">
                    <img src=${team.thumbnail}>
                    </div>
                    <div class="card-stacked">
                    <div class="card-content">
                        <p>${team.short_description}</p>
                    </div>
                    </div>
                </div>
                </div>
          

                `
            });
            contents.innerHTML = '<ul class="collection">' + data + '</ul>'
        }).catch(err => {
            console.error(err);
        })
}

function getListStandings() {
    title.innerHTML = "Give aways";
    fetch(standingEndPoin, fetchHeader)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
            let data = "";
            resJson.forEach(team => {
                data += `
                
                <div class="col m12">
                <h2 class="header">${team.title}</h2>
                <div class="card horizontal">
                    <div class="card-image">
                    <img src=${team.thumbnail}>
                    </div>
                    <div class="card-stacked">
                    <div class="card-content">
                        <p>${team.short_description}</p>
                    </div>
                    </div>
                </div>
                </div>
          

                `
            });
            contents.innerHTML = '<ul class="collection">' + data + '</ul>'
        }).catch(err => {
            console.error(err);
        })
}

function getListMatches() {
    title.innerHTML = "Berita Game Terkini";
    fetch(matchEndPoin, fetchHeader)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
             let data = "";
            resJson.forEach(team => {
                data += `
                
                <div class="col m12">
                <h2 class="header">${team.title}</h2>
                <div class="card horizontal">
                    <div class="card-image">
                    <img src=${team.thumbnail}>
                    </div>
                    <div class="card-stacked">
                    <div class="card-content">
                        <p>${team.short_description}</p>
                    </div>
                    </div>
                </div>
                </div>
          
                `
            });
            contents.innerHTML = '<ul class="collection">' + data + '</ul>'
        }).catch(err => {
            console.error(err);
        })
}

function loadPage(page) {
    switch (page) {
        case "teams":
            getListTeams();
            break;
        case "standings":
            getListStandings();
            break;
        case "matches":
            getListMatches();
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
        elm.addEventListener("click", evt => {
            let sideNav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sideNav).close();
            page = evt.target.getAttribute("href").substr(1);
            loadPage(page);
        })
    })
    var page = window.location.hash.substr(1);
    if (page === "" || page === "!") page = "teams";
    loadPage(page);
});
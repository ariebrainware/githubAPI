const resultField= $('#result-field')
let dataFollowers=[]
const fetchData = ()=>{
    fetch('https://api.github.com/users/ariebrainware/followers')
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        dataFollowers = data
                
    })    
}

const template = (user) =>{  
    return `
    <div class="col-md-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top avatar-img" src="${user.avatar_url}" alt="Profile image">
        <div class="card-body">
            <h5 class="card-title">${user.login}</h5>
            <p class="card-text">UID: ${user.id}</p>
            <a href="${user.html_url}" class="btn btn-primary">Visit Profile</a>
        </div>
    </div>
    </div>
    `
}

const showData = () =>{
    resultField.html("")
    dataFollowers.map((person,index) =>{
        const card = template(person,index)

        resultField.append(card)
    })
}

$(window).on('load',()=>{
    fetchData()
    setTimeout(showData,3000)
})
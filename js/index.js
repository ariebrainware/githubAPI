const resultField = $('#result-field')
// let dataFollowers=[]
const fetchData = () => {
    const apiURL = "https://api.github.com/users/ariebrainware/followers"
    fetch(apiURL)
        .then(response => response.json())
        .then(data => showData(data))
}

const template = (user) => {
    return `
    <div class="col-md-3">
    <div class="card">
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

const showData = (data) => {
    resultField.html("")
    data.map((person) => {
        const card = template(person)
        resultField.append(card)
    })
}

$(window).on('load', () => {
    fetchData()

})
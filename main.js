const linksSocialMedia = {
  github: 'cleber-santos',
  youtube: 'RocketSeat',
  instagram: 'cleber_snts',
  facebook: 'cleber.07',
  twitter: 'CleberS_1984'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

getGithubProfileInfos()

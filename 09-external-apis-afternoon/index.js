document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', search)
  
});
const API_KEY = 'AIzaSyBBuUwkxXg_Vyk2iAQDwMK7ZVnbz7vAZvk'

function getVideos(search){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${API_KEY}`)
    .then(res=> res.json())
    .then(data => {
        buildVideo(data.items[0])
        data.items.forEach(item => buildAside(item))
    })
}


function search(e){
    e.preventDefault()
    getVideos(e.target.search.value)
}

function buildVideo(video){
    let main = document.querySelector('main')
    main.innerHTML = ''
    let iframe = document.createElement('iframe')
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
    iframe.style.width = '800px'
    iframe.style.height = '500px'
    main.appendChild(iframe)
}

function buildAside(video){
    let image = document.createElement('img')
    image.src = video.snippet.thumbnails.medium.url
    image.addEventListener('click', () => buildVideo(video) )
    document.querySelector('aside').appendChild(image)
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit',handleSubmit)
});

function getVideos(search){
    const API_KEY = 

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${API_KEY }`)
    .then(res => res.json())
    .then(videos =>{
        videos.items.forEach(video => buildAside(video))
        buildVideo(videos.items[0])
    })
}

function handleSubmit(e){
    e.preventDefault()
    getVideos(e.target.search.value)
}

function buildVideo(video){
   let main = document.querySelector('main')
   main.innerHTML = ''
   let h1 = document.createElement('h1')
   let p = document.createElement('p')
   let iframe = document.createElement('iframe')
   iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
   iframe.style.width = '800px'
   iframe.style.height = '500px'
   h1.innerText = video.snippet.title
   p.innerText = video.snippet.description
   console.log(iframe)
   main.append(iframe,h1,p)
}


function buildAside(video){
    console.log(video)
    let image = document.createElement('img')
    image.src = video.snippet.thumbnails.medium.url 
    image.addEventListener('click', () => buildVideo(video) )
    document.querySelector('aside').appendChild(image)
}
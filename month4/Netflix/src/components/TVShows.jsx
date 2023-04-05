import MyCarousel from "./MyCarousel";
let url="http://www.omdbapi.com/?i=tt3896198&apikey=769155e5&s=";
let film="Final Fantasy"

const TVShows= () => {

    return(
<MyCarousel url={url} nameTitle={film} title="TV Shows"/>

    )

}

export default TVShows;



export const ADD_ALBUM = "ADD_ALBUM";
export const ADD_QUERY= "ADD_QUERY";
export const SET_SELECTED="SET_SELECTED";
export const ROCK="ROCK";
export const POP="POP";
export const HIPHOP="HIPHOP";
export const SELECTED_ALBUM="SELECTED_ALBUM";
export const SELECTED_TRACK="SELECTED_TRACK";
export const ADD_FAV="ADD_FAV";
export const DELETTE_FAV="DELETTE_FAV";

export const addFavorite=(track)=>({

    type:ADD_FAV,
    payload:track

})

export const removeFavorite=(track)=>({

    type:DELETTE_FAV,
    payload:track

})



export const selectedTrack=(track)=>({

    type:SELECTED_TRACK,
    payload:track

})

export const addALLAlbum=(allAlbum)=>({

    type:SELECTED_ALBUM,
    payload:allAlbum

})

export const addAlbum = (album)=>({

    type:ADD_ALBUM,
    payload:album

})

export const addQuery= (query)=>({
    type:ADD_QUERY,
    payload:query
})

export const setSelected=(selected)=>({

    type:SET_SELECTED,
    payload:selected  

})

export const rock=(rock)=>({
    type: ROCK,
    payload:rock
})

export const pop=(pop)=>({
    type:POP,
    payload:pop
})

export const hiphop=(hiphop)=>({

    type:HIPHOP,
    payload:hiphop

})



export const getAlbum = (querry) =>{
    
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })
      return async(dispatch,getState) =>{
      try {
        
          let res=await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+querry, {
              method: 'GET',
              headers,
            })
            if(res.ok){
                let data=await res.json()

                    
                    dispatch(addAlbum(data.data))
                }

              
      } catch (error) {
        console.log(error);
      }

    }
}

export const getRock = (querry) =>{
    
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })
      return async(dispatch,getState) =>{
      try {
        
          let res=await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+querry, {
              method: 'GET',
              headers,
            })
            if(res.ok){
                let data=await res.json()

                    
                    dispatch(rock(data.data))
                }

              
      } catch (error) {
        console.log(error);
      }

    }
}
export const getPop = (querry) =>{
    
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })
      return async(dispatch,getState) =>{
      try {
        
          let res=await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+querry, {
              method: 'GET',
              headers,
            })
            if(res.ok){
                let data=await res.json()

                    
                    dispatch(pop(data.data))
                }

              
      } catch (error) {
        console.log(error);
      }

    }
}

export const getHIPHOP = (querry) =>{
    
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })
      return async(dispatch,getState) =>{
      try {
        
          let res=await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+querry, {
              method: 'GET',
              headers,
            })
            if(res.ok){
                let data=await res.json()

                    
                    dispatch(hiphop(data.data))
                }

              
      } catch (error) {
        console.log(error);
      }

    }
}
export const getAlbumSelected = (id) =>{
    
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })
      return async(dispatch,getState) =>{
      try {
        
          let res=await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+id, {
              method: 'GET',
              headers,
            })
            if(res.ok){
                let data=await res.json()
                    dispatch(addALLAlbum(data))
                }

              
      } catch (error) {
        console.log(error);
      }

    }
}
export const getArtistSelected = (id) =>{
    
    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })
      return async(dispatch,getState) =>{
      try {
        
          let res=await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/"+id, {
              method: 'GET',
              headers,
            })
            if(res.ok){
                let data=await res.json()
                    dispatch(addALLAlbum(data))
                }

              
      } catch (error) {
        console.log(error);
      }

    }
}
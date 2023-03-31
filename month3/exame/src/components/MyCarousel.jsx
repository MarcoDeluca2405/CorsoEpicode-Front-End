import { Component } from "react";
import Filmcard from "./Filmcard";
import Slider from "react-slick";
import { Spinner } from "react-bootstrap";

class MyCarousel extends Component{

    state={
        dataFilm:[],
        isLoading:false
    }

    
    
    getFilm= async () =>{
        this.setState({isLoading:true})
        try {
            let film=this.props.nameTitle;
            let resultFilm=film.replace(" ", "%20");
           let resposive=await fetch(this.props.url+resultFilm);
            if(resposive.ok){
                let data=await resposive.json();
                this.setState({dataFilm:data.Search});
                this.setState({isLoading:false})

            }else{
                console.log("errore")
                this.setState({isLoading:false})
            }
            
        } catch (error) {
            console.log(error)
        }


    }



componentDidMount(){

    this.getFilm();

}



    render(){

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            arrows:false,
            autoplay:true,
            autoplaySpeed:2000,
            slidesToScroll: 1,
            swipe:true,
            swipeToSlide:true,
          };
        

        return(
            <div className="my-5">
            <h2 className="ms-3 my-4 text-start">{this.props.title}</h2>

            {this.state.isLoading&&(
                <div className="lg-3">
                    <Spinner animation="border" variant="danger" />

                    </div>
            )}

            <Slider {...settings}>

            {this.state.dataFilm?.map(el=>{
               return <Filmcard src={el} />
            
    })}
     

            </Slider>


         

            </div>


        );

    }
}


export default MyCarousel;
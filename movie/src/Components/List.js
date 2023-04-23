import React, { Component } from 'react'
// import { movies } from './getMovies';
import axios from 'axios';

export default class extends Component {
  constructor()
  {
    super();
    this.state={
      hover:'',
      parr:[1],
      currPage:1,
      movies:[],
      favourites:[]
    }
  }
  async componentDidMount()
  {
    console.log("mounting done");
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b1490b1cb0a95da67b2031c98ce93999&language=en-US&page=${this.state.currPage}`);
    let data=res.data;
    // console.log(data);
    this.setState({
      movies:[...data.results]
    })
  }
  changemovies=async()=>
  {
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b1490b1cb0a95da67b2031c98ce93999&language=en-US&page=${this.state.currPage}`);
    let data=res.data;
    // console.log(data);
    this.setState({
      movies:[...data.results]
    })
  }
  handleRightClick=()=>
  {
let tmp=[];
for(let i=1;i<=this.state.parr.length+1;i++)
{
  tmp.push(i);
}
this.setState({
  parr:[...tmp],
  currPage:this.state.currPage+1
},this.changemovies);

  }
  handleLeftClick=()=>
  {
    if(this.state.currPage!=1)
    {
      this.setState({
        currPage:this.state.currPage-1
      },this.changemovies)
    }
  }
  handleClick=(value)=>
  {
    if(value!=this.state.currPage)
    {
      this.setState({
        currPage:value
      },this.changemovies)
    }
  }
  handleFavourite=(movie)=>
  {
    let oldData=JSON.parse(localStorage.getItem('movies-app')||"[]");
    if(this.state.favourites.includes(movie.id))
    {
oldData=oldData.filter((m)=>m.id!=movie.id)
    }
    else{
      oldData.push(movie);
    }
    localStorage.setItem("movies-app",JSON.stringify(oldData));
    console.log(oldData);
    this.handleFavouritesState();

  }
  handleFavouritesState=()=>
  {
    let oldData=JSON.parse(localStorage.getItem('movies-app')||"[]");
    let temp=oldData.map((movie)=>movie.id);
    this.setState({
      favourites:[...temp]
    })
  }
  render() {
    // let movie=movies.results;
    return (
      <>
      {
      this.state.movies.length==0?
      <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden"></span>
      </div> : 

      <div>
        <h3 className=" text-center" ><strong>Trending</strong></h3>
        <div className='movie-list'>
         
         {this.state.movies.map((movieObj)=>
         {  return(
            <div class="card movie-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
            <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} class="card-img-top banner-img" alt="..."/>
            
            <h5 class="card-title movie-title">{movieObj.original_title}</h5>
            {/* <p class="card-text banner-text">{movie.overview}</p> */}
            <div className='button-wrapper'>
              {
                this.state.hover==movieObj.id &&
                <a class="btn btn-primary movies-button" onClick={()=>this.handleFavourite(movieObj)}>
               {this.state.favourites.includes(movieObj.id)? "Remove from favourites":"Add to favourites"}
            </a>
              }
          </div>
          </div>
         )})}
   </div>
   <div style={{display:'flex',justifyContent:'center'}}>
   <nav aria-label="Page navigation example">
  <ul class="pagination">
    
      <li class="page-item"><a class="page-link" onClick={this.handleLeftClick}>Previous</a></li>
      {
        this.state.parr.map((value)=>
        (
          <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
        ))
      }
     <li class="page-item"><a class="page-link" onClick={this.handleRightClick}>Next</a></li>
  </ul>
</nav>
</div>
   </div>
   }
   </>
    )
  }
}

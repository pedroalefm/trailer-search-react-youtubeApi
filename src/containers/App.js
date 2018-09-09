import _ from 'lodash'
import React, {Component} from 'react'
import Searchbar from '../components/Searchbar/Searchbar.js'
import YTSearch from 'youtube-api-search'
import VideoList from '../components/Video_list/VideoList.js'
import VideoDetail from '../components/Video_detail/VideoDetail.js'
class App extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            API_KEY : 'AIzaSyDnlejef8kN6Bth-LGA1NOaOYWyWNn2ifM',

            videos: [],
            selectedVideo: null
        }
        
        this.videoSearch('')
       
     
    }
   
    videoSearch = (term) =>{

        YTSearch({key:this.state.API_KEY, term:`oficial trailer ${term}`}, (data)=>{
            this.setState({videos: data, selectedVideo: data[0]})
        })

    }
  
  
    render(){
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        },300)
        return(
            <div>
                <Searchbar onSearchTermChange = {videoSearch} />
                <VideoDetail videos = {this.state.selectedVideo} />
                <VideoList onVideoSelect = {(selected) => this.setState({selectedVideo:selected})} videos = {this.state.videos}/>
            </div>
        )
    }
}

export default App
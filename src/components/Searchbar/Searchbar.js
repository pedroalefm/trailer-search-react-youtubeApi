import React, {Component} from 'react'


class Searchbar extends Component{

    constructor(props){
        super(props);

        this.state = {
            term: ''

        }
    }
  
    
    
    render(){
        return (
            <div className = "col-md-8 search-bar"> 
                <input
                    placeholder = "Just say the movie..."
                    value = {this.state.term}
                    onChange= {event => this.onInputChange(event.target.value)} 
                />
            </div>
        )

    }

    onInputChange = (term)=>{
        this.setState({term:term})
        this.props.onSearchTermChange(term);
    }

   

}

export default Searchbar
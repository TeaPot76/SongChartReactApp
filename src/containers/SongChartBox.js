import React, {Component} from 'react';
import SongChartList from '../components/SongChartList';
import Header from '../components/Header'


class SongChartBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
    }
  }


  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res =>res.json())
    .then((allSongs) => {
      this.setState({songs: allSongs.feed.entry});
    });
  }

//   componentDidMount() {
//   const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//
//   request.addEventListener("load", () => {
//     if (request.status !== 200) return;
//     const jsonString = request.responseText;
//     const data = JSON.parse(jsonString);
//     this.setState({songs: data.feed.entry})
//   });
//   request.send();
// }



  render(){
    return(
      <div>
      <Header/>
      <SongChartList songs={this.state.songs}/>
      </div>
    );
  }
}


export default SongChartBox;

import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ListNews from './components/ListNews';
import Footer from './components/Footer';

class App extends Component {
  state = {
    news: []
  }  
  componentDidMount(){
    this.checkNews();
  }
  checkNews = async (category = 'general') => {
    const url = `
      https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=15b2cebfe360495d9c4f1ae4925c6af6
    `;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Header
          title = 'React News API'
        />
        <div className='container white container-news'>
          <SearchForm
            checkNews={this.checkNews}
          />
          <ListNews
            news = {this.state.news}
          />
        </div>
        <Footer
          NewsAPI = 'Powered by: NewsAPI'
        />
      </Fragment>
     );
  }
}
 
export default App;
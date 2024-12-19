import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


export class News extends Component {


  constructor() {
    super();

    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults : 0
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=0485280f604b4eca9e7b110550c414d5&page=1&pagesize=8`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    
    this.updateNews();
  }
  
  

  
  render() {
    return (
      <div className="Container my-10">
        <h3 className="text-center">HeadLines</h3>

        {this.state.loading && <Spinner />}
        {!this.state.loading &&
          this.state.articles.map((element) => {
            return (
              <div className="small-container" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : ""}
                  description={
                    element.description ? element.description.slice(0, 70) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt ? element.publishedAt : ""}
                  source={element.source ? element.source.name : "Unknown"}
                />
              </div>
            );
          })}

        
      </div>
    );
  }
}

export default News;

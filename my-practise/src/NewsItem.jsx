import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <span className="badge rounded-pill text-bg-danger"> source: {source}</span>
        <div className="card" >
          <img src={!imageUrl?"./cover.png":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank"className="btn btn-primary">Read more</a>
            <p className="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>

        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

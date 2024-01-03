import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,desc,imgurl,dataurl} = this.props;

    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={!imgurl?"https://images.wsj.net/im-903674/social":imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={dataurl} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    )
  }
}

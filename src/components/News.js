import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'General'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number 
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page : 1,
        }
    }

    async componentDidMount() {

        let newsurl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c23a649db9ed488f9585db99f527e241&page=1&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(newsurl);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }
    handlePrev = async()=>{
        let newsurl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c23a649db9ed488f9585db99f527e241&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(newsurl);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
      
    }
    handleNext = async()=>{
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let newsurl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c23a649db9ed488f9585db99f527e241&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            let data = await fetch(newsurl);
            let parsedData = await data.json();
            this.setState({
                loading: false,
                page: this.state.page + 1,
                articles: parsedData.articles
            })
           
        }
    }
   
    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className='text-center'>NewsEZ -  Get The Latest News</h1>
                    {this.state.loading&&<Spinner/>}
                    <div className="row my-3">
                        {!this.state.loading&&this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 35) : ""} desc={element.description ? element.description.slice(0, 60) : ""} imgurl={element.urlToImage} dataurl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

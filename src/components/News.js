import React , { useState , useEffect} from 'react'
import './../App.css'
import Loading from './Loading'
const News = ({ size , country , cat }) => {

  let [news, setNews] = useState([])
  let [page, setPage] = useState(1)
  let [loading, setLoading] = useState([])

  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=4fb20e56e83443acbf31e5746df87fd4&page=${page}&pageSize=${size}`)
    setLoading(true)

    let data = await response.json()
    setNews(data.articles)
    setLoading(false)

  }
  useEffect(() => {
    getNews()
  }, [])

  const Next = async () => {
    getNews()
    // if((page+1) > Math.ceil(data.totalResults/9)){
    //   alert("No more news")
    //   setLoading(false)
    // }
    // else{
    setPage(page+1)
    // }
  }
  const Prev = async () => {
    getNews()
    setPage(page-1)
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
    return (
      <>
      <h1 style={{textAlign:"center"}}>Top News On {capitalizeFirstLetter(cat)}</h1>
      {loading && <Loading />}
        <div className="box-card">
            {!loading && news.map((element) => {
                return (
                    <div className="card">
                    <img loading="lazy" className="card-img-top" src={!element.urlToImage?"https://img.lovepik.com/element/40021/7866.png_860.png":element.urlToImage} alt="xyz"/>
                    <div className="card-body">
                      <p className="card-text">{element.publishedAt.slice(0,10)}</p>
                      <p className="card-text">{element.source.name}</p>
                      <h5 className="card-title">{element.title?element.title.slice(0,80):""}</h5>
                      <p className="card-text">{element.description?element.description.slice(0, 120):""}</p>
                      <a href={element.url} target="_blank" className="btn btn-primary">Explore &#8594;</a>
                    </div>
                  </div>
                    )
            })}
        </div>
        <div className="pagination my-3">
            <button className="btn btn-primary" disabled={page<=1} onClick={Prev}>Previous</button>
            <button className="btn btn-primary" onClick={Next}>Next</button>
        </div>
        </>
    )
}

export default News

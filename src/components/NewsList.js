import React,{useEffect,useState} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem'

let apikey = 'f8e2c6dd991c41d8b951aace63171fec'
const NewsList = () => {
    const [articals,setArticals] = useState([]);

    useEffect(()=>{
        getNews();
        console.log(articals)
    },[]);

    const getNews = async() => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=india&apiKey=${apikey}`);
       setArticals(response.data.articles);
    }
    console.log(articals)


    return(
        <div>
            <h2>hello</h2>
            {articals.map((item)=>{
                return(
                    <NewsItem 
                    title={item.title}
                    description = {item.description}
                    url={item.url}
                    imgurl={item.urlToImage}
                    publishedAt={item.publishedAt}
                />
                )
            })}
        </div>
    );
};

export default NewsList;
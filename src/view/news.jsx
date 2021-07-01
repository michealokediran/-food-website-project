import Card from "../card";
export default function News() {
    return (
        <div>
            <span className="news-head">
                <h1>Latest News</h1>
             </span>
             <div className="news-cards1">
                <Card img="./access/images/blog-3.jpg"/>
                <Card img="./access/resources/f320379a/blog-post/post-8/DSC_9442.jpg"/>
                <Card/>
             </div>
        </div>
        );  
}
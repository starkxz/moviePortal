const Addfavs = () => {
    return ( 
        <div className="addfavs">
            <div class="forms">
                <img width="200" src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />
                <form action="">
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="genre"/>
                    <input type="text" placeholder="language"/>
                    <input type="number" min="0" max="10" placeholder="rating"/>
                    <button>Add</button>
                </form>
            </div>
            <div class="content">
                <h1> Add your 
                    <br></br>Favourite 
                    <br></br>Movies & Tv shows. </h1>
            </div>
        </div>
     );
}
 
export default Addfavs;
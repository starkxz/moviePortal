const Home = () => {
    let images = [
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2831/552831-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5944/1000055944/1000055944-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7247/457247-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1166/1770001166/1770001166-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/333/1770000333/1770000333-v"}
    ]
    return (
        <div className="home">
            <div className="poster">
                <img width="1450"  height="500" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2677/362677-h" alt="" />
            </div>
            <div className="movies_list">
                { images.map((data) =>{
                    return (
                        <img height="375" width="250" src={data.img} alt="" />
                    )
                })}  
            </div>
        </div>
    );
}

export default Home;
const Navbar = () => {
    let links = [
        {links:"Home",path:"/"},
        {links:"About",path:"/about"},
        {links:"Favourites",path:"/favourites"},
        {links:"Signup",path:"addfavs"}
    ]
    return (  
        <div className="navbar">
            <div className="logo">
                <img width="200" src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt=""  />
            </div>
            <div className="links">
                { links.map((data)=>{
                    return (
                        <a href={data.path}>{data.links}</a>
                        
                    )

                })}
            </div>
        </div>
    );
}
 
export default Navbar;
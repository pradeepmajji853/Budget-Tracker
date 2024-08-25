import Title from "./Title.jsx"
import Navbar from "./Navbar.jsx"
import TitleImg from "./TitleImg.jsx"


export default function Heropage(){
    return(
    <div className="Heropage">
    
    <div className="TitleBox1" style={{  display: 'flex',
    gap:'10px',
    marginBottom:'12rem'
}}>
    <Title/>
    <TitleImg/>

    </div>
    
    </div>
    )

}

import videoHomePage from '../../assets/compose.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted width={750} height={500} >
                <source src={videoHomePage} />
            </video>
        </div>
    )
}

export default HomePage;
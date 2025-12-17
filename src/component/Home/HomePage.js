
import videoHomePage from '../../assets/compose.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted width={750} height={500} >
                <source src={videoHomePage} />
            </video>
            <div className='homepage-content'>
                <div className='homepage-title'>There is a better way to manage your projects</div>
                <div className='homepage-description'>You don't want to make a boring form. And your audience won't answer one.
                    Create forms that are engaging and fun with our form builder.
                </div>
                <div className='homepage-end'>
                    <button>Get started free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
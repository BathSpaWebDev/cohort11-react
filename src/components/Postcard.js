import PostcardImage from "./PostcardImage";
import PostcardText from "./PostcardText";


function Postcard({imageSrc, text, title, isDarkMode, children}) {
    
    return (
        <div className={`postcard ${isDarkMode ? 'darkmode' : '' }`}>
            <PostcardImage imageSrc={imageSrc} isDarkMode={isDarkMode} />
            <PostcardText title={title} text={children} isDarkMode={isDarkMode} />
        </div>
    )
}
export default Postcard;
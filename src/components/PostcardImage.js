function PostcardImage({imageSrc, isDarkMode}){
    return (
        <div className="postcard__image">
            {
                isDarkMode ? 
                    <img className="dark-image" alt="beach" src={imageSrc} />
                :
                    ''
            }
            
        </div>
    )
}
export default PostcardImage;
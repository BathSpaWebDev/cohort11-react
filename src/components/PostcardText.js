function PostcardText({ title, text, isDarkMode }) {
    return (
        <div className="postcard__text">
            <h2>{title}</h2>
            <p>{text}</p>
            {
            isDarkMode ?
                <p>Dark mode is true</p>
                :
                ''
            }
        </div>
    )
}
export default PostcardText;
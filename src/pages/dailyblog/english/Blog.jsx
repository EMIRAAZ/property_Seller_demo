import "./blog.scss"

const BlogCard= () => {
 return (
     <>
     <div className="blog-card-container">
        <div className="blog-desciption">
            <p className="blog-date">14 august</p>
            <div className="blog-content">
            <h1 className="blog-heading">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h1>
            <p className="blog-description">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
            </div>
        </div>
       <div>
       <img className='blog-main-image' src="/assets/image/blog1.jpg" alt ="blog"  />
       </div>
     </div>
     </>
 )

}

const Blog = () => {
  return (
    <>
    <div className="blog-container">
        <div>
            <BlogCard/>
        </div>
        <div>

        </div>
        <div>

        </div>

    </div>
    </>
  )
}

export default Blog
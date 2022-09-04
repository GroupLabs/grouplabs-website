import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import groq from 'groq'
import client from './client'

const Blog = ({posts}) => {
    return (
      <div>
        <Navbar/>
        <div className='blogContainer'>
          {posts.length > 0 && posts.map(
            ({ _id, title = '', slug = '', publishedAt = '', mainImage }) =>
              slug && (
                <div key={_id}>
                  <BlogCard title={title} tag='Newpost' date={new Date(publishedAt).toDateString()} image={mainImage.asset._ref} link={`/post/${slug.current}`}/>
                </div>
              )
          )}
        </div>
        <Footer />
        <style>{`
          .blogContainer {
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            background-color: #F5F5F5;
          }
          `}
        </style>
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Blog
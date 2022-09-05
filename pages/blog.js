import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import groq from 'groq'
import client from '../components/client'

const Blog = ({posts}) => {
    return (
      <div>
        <Head>
          <title>Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='zUpper' style={{position:"relative", zIndex:"99"}}>
        <Navbar/>

        </div>
        <div className='blogContainer'>
          {posts.length > 0 && posts.map(
            ({ _id, title = '', slug = '', publishedAt = '', mainImage, categories }) =>
              slug && (
                <div key={_id}>
                  <BlogCard title={title} tag={categories[0]} date={new Date(publishedAt).toDateString()} image={mainImage.asset._ref} link={`/post/${slug.current}`}/>
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
          .zUpper{
            position:relative;
            z-index:99;
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
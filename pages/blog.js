import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import groq from 'groq'
import client from '../components/client'
import Head from 'next/head'

const Blog = ({posts}) => {
    return (
      <div>
        <Head>
          <title>GroupLabs | Blog</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="GroupLabs | Blog" />
          <meta property="og:type" content="blog page" />
          <meta property="og:description" content="This is a place for people to build together. 
          We believe that in a future full of new problem spaces with unprecedented complexity, it is essential that
          we remain cooperative and inclusive." />
          <meta property="og:image" content="https://grouplabs.ca/OGImage.jpg" />
          <meta property="og:url" content="https://www.grouplabs.ca" />
          <meta name="twitter:card" content="summary_large_image" />
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
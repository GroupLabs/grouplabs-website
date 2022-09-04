import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../components/client'
import { BiChevronLeft } from 'react-icons/bi';
import Link from 'next/link';
import styles from './Post.module.css'
import MiniFooter from '../../components/MiniFooter';
import Image from 'next/image'
import {useEffect} from 'react'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className={styles.pImageContainer}>
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
        </div>
      )
    }
  }
}

export default function Post({post}){
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    heroImage,
    body = []
  } = post

  return (
    <div>
    <article className={styles.pContainer}>
      <div className={styles.pCategoryContainer}>
        {categories && (
          <ul>
            {categories.map(category => <li className={styles.pCategory} key={category}>#{category}</li>)}
          </ul>
        )}
      </div>
      <div className={styles.pHead}>
          <Link href="/blog">
            <div style={{"display":"flex", "flexFlow":"row nowrap", "alignItems":"center", "cursor":"pointer"}}>
              <BiChevronLeft/>
              Back
            </div>
          </Link>

        <div className={styles.pAuthor}>
          {authorImage && (
            <div>
              <Image
                className={styles.pAuthorImage}
                src={urlFor(authorImage)
                  .width(50)
                  .url()}
                alt={`${name}'s picture`}
              />
            </div>
          )}
          <div className={styles.pAuthorName}>{name}</div>
        </div>
      </div>

      <h1 className={styles.pHeader}>{post.title}</h1>


      {heroImage && (
      <div className={styles.pHeroContainer}>
        <Image className={styles.pHero} src={urlFor(heroImage).url()} alt={title} />
      </div>)}
      <div className={styles.pBody}>
        <PortableText
          value={body}
          components={ptComponents}
        />
      </div>
    </article>
    <MiniFooter />
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  "heroImage": mainImage.asset._ref
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  console.log(`Building slug: ${slug}`)
  return {
    props: {
      post
    }
  }
}
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TagCloud from '@frank-mayer/react-tag-cloud';
import BackgroundImage from '@site/static/img/wave-haikei.svg';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import styles from './index.module.css';

function RecentBlogPostCard({ recentPost }) {
  const { Preview, metadata } = recentPost;
  
  return (
    <article className='hover-opacity' style={{ padding: 30, width: '300px', flexGrow: '1', maxWidth: '500px', cursor: 'pointer' }}
    onClick={() => window.location.href = `/posts/${metadata.frontMatter.slug}`}>
      <h2>{metadata.title}</h2>
      <hr />
      <Preview />
    </article>
  );
}

export default function Home({ homePagePostsMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '700px', width: '100%' }}>

        <div style={{ display: 'flex', flexDirection: 'column', height: '30%', justifyContent: 'flex-end', alignItems: 'center', width: '100%', position: 'relative' }}>
          <BackgroundImage preserveAspectRatio='none' width='100%' height='400' title='Background Image' style={{ width: '100%', margin: '-220px', zIndex: -1, position: 'absolute' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', height: '100%', position: 'relative', width: '100%' }}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle" style={{ marginBottom: '0' }}>{siteConfig.tagline}</p>
          </div>
        </div>

        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', height: '70%' }}>
          <TagCloud
            options={{ radius: 200 }}
            onClick={(tag: string, ev: MouseEvent) => { window.location.href = `/posts/tags/${tag}` }}
            style={{ marginTop: '-20px' }}
          >
            {Array.from(new Set(recentPosts.flatMap((post) => {
              return post.metadata.frontMatter.tags.map((tag) => {
                return tag;
              });
            }))) as string[]}
          </TagCloud>
          <div style={{ animation: 'bounceAnimation 2s ease-in-out infinite' }}>^^^</div>
          <div style={{ fontStyle: 'italic' }}>{`psst, click on a tag to view related blog posts :)`}</div>
        </div>
      </div>
      <main style={{ padding: 10 }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <h1>Recent Posts</h1>
        </div>
        {/* <p>{homePagePostsMetadata.blogDescription}</p> */}
        {/* <p>
          Displaying some sample posts:
          {homePagePostsMetadata.totalRecentPosts} /{' '}
          {homePagePostsMetadata.totalPosts}
        </p> */}

        <section style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          {recentPosts.map((recentPost, index) => (
            <RecentBlogPostCard key={index} recentPost={recentPost} />
          ))}
        </section>
        <hr />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
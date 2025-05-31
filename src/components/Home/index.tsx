import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TagCloud from '@frank-mayer/react-tag-cloud';
import BackgroundImage from '@site/static/img/wave-haikei.svg';
import Button from '@site/src/components/Button';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import styles from './index.module.css';

function RecentBlogPostCard({ recentPost }) {
  const { metadata } = recentPost;

  return (
    <div style={{ cursor: 'pointer', margin: '5px' }}
      onClick={() => window.location.href = `/posts/${metadata.frontMatter.slug}`}>
      <div style={{ fontSize: '24px' }}>{metadata.title}</div>
    </div>
  );
}

export default function Home({ recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  const [selectedOption, setSelectedOption] = useState('posts');

  return (
    <Layout
      title={`${siteConfig.title}`}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '30px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            size="lg"
            variant={selectedOption === 'posts' ? 'primary' : 'secondary'}
            label="posts"
            onClick={() => { setSelectedOption('posts'); }}

          />
          <Button
            size="lg"
            variant={selectedOption === 'tagcloud' ? 'primary' : 'secondary'}
            label="tagcloud"
            onClick={() => { setSelectedOption('tagcloud'); }}

          />
          <Button
            size="lg"
            variant={selectedOption === 'about ' ? 'primary' : 'secondary'}
            label="about "
            link='/about'

          />
        </div>
      </div>
      {selectedOption === 'posts' && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {recentPosts.map((recentPost, index) => (
            <RecentBlogPostCard key={index} recentPost={recentPost} />
          ))}
        </div>
      )}
      {selectedOption === 'tagcloud' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', height: '70%' }}>
            <div style={{ fontStyle: 'italic' }}>{`psst, click on a tag to view related blog posts :)`}</div>
            <div style={{ animation: 'bounceAnimation 2s ease-in-out infinite' }}>vvv</div>
            <TagCloud
              options={{ radius: 300, initSpeed: 'fast', maxSpeed: 'fast' }}
              onClick={(tag: string, ev: MouseEvent) => { window.location.href = `/posts/tags/${tag.replaceAll(' ', '-').toLowerCase()}` }}
              style={{ marginTop: '-20px' }}
            >
              {Array.from(new Set(recentPosts.flatMap((post) => {
                return post.metadata.frontMatter.tags.map((tag) => {
                  return tag;
                });
              }))) as string[]}
            </TagCloud>
          </div>
        </div>
      )}

    </Layout >
  );
}
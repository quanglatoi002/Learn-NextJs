import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface Props {
  post: any[];
}

export default function PostListPage({ post }: Props) {
  return (
    <div>
      index posts
      <ul>
        {post.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  console.log('static props');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
};

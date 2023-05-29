import { useRouter } from 'next/router';
import React from 'react';

export interface Props {}

export default function ParamsPage(props: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // fake slow query
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    props: {},
  };
}

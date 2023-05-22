import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const postId = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default postId;

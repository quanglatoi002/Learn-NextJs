import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const paramsPage = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default paramsPage;

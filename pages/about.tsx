import { useRouter } from 'next/router';
import React from 'react';

export interface AboutPageProps {}

// lúc đầu kết quả trả về bên phía clients
// About query {} sẽ là 1 object rỗng
// router.query empty when pre-rendering, update after hydration và output đầu ra là HTML
export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  console.log('About query', router.query);
  return <div>about</div>;
}
//Sau khi use getServerSideProps output đầu ra là file JS
export async function getServerSideProps() {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  };
}

import RootLayout from "@/components/Layout/RootLayout";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Head from "next/head";


const HomePage = () => {

  return (
    <>
      <Head>
        <title>PC WORKSHOP</title>
        <meta
          name="description"
          content="This is a pc builder web application made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedCategory/>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


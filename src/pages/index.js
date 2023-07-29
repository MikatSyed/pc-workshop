import RootLayout from "@/components/Layout/RootLayout";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import FeaturedProduct from "@/components/UI/FeaturedProduct";
import Head from "next/head";


const HomePage = ({products}) => {

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
      <FeaturedProduct products={products}/>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async ()=> {
  const res = await  fetch('http://localhost:4000/products/random');
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data
    },
    revalidate: 10
  }
}
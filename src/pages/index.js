import RootLayout from "@/components/Layout/RootLayout";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import FeaturedProduct from "@/components/UI/FeaturedProduct";
import Head from "next/head";


const HomePage = ({products,categories}) => {

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
      <FeaturedCategory categories={categories}/>
      <FeaturedProduct products={products}/>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async ()=> {
  const res1 = await  fetch('http://localhost:4000/products/random');
  const res2 = await  fetch('http://localhost:4000/category')
  const products = await res1.json();
  const categories= await res2.json();
  

  return {
    props:  {products,categories}
    ,
    revalidate: 10
  }
}


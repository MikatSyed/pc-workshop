import { Card, Col, Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;
const ProductCard = ({ product }) => {
  return (
    <div >
      <>
        <Link href={`/product/${product._id}`}>
          <Col xs={24} sm={24} md={8} lg={6} xl={5} className="card" key={product._id}>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    alt={product.productName}
                    src={product.image}
                    height={180} // Adjust the height of the image as needed
                    width={180}  // Adjust the width of the image as needed
                  />
                </div>
              }
              actions={[
                <span className="text" key="1">{product.category}</span>,
                <span className={product.status === 'In Stock' ? 'green' : 'red'} key="2">{product.status}</span>,
                <span className="text" key="3">${product.price}</span>,
                
              ]}
            >
              <Meta
                title={product.product_name}
                description={<Rate allowHalf disabled defaultValue={product.average_rating} />}
              />
            </Card>
          </Col>
        </Link>
      </>
    </div>
  );
};

export default ProductCard;

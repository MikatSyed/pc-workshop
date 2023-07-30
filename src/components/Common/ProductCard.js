import { Card, Col, Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;
const ProductCard = ({product}) => {
    return (
        <div>
               <>
       <Link href={`/product/${product._id}`}>
        <Col xs={20} sm={20} md={8} lg={6} xl={5} className="card" key={product._id}>
        <Card
    style={{
      width: 300,
    }}
    cover={
      <Image
        alt={product.productName}
        src={product.image}
        height={150}
        width={150}
      />
    }
    actions={[
        <span className="text">{product.category}</span>,
        <span className={product.status === 'In Stock'? 'green':'red'}>{product.status}</span>,
        <span className="text">${product.price}</span>,
     
    ]}
  >
    <Meta
      title={product.product_name}
      description={ <Rate allowHalf disabled defaultValue={product.average_rating} />}
      
    />
    
  </Card>
      </Col>
      </Link>
       </>
        </div>
    );
};

export default ProductCard;
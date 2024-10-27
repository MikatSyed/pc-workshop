import React from 'react';
import { Card, Rate } from 'antd';

const ReviewCard = ({ username, rating, comment }) => {
  return (
   <>
    <Card style={{ width: 300, margin: 16 }}>
      <h3>Username: {username}</h3>
      Rating: <Rate disabled allowHalf defaultValue={rating} />
      <h4>Comment: {comment}</h4>
    </Card>
    
   </>
  );
};

export default ReviewCard;

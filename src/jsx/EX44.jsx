import React from "react";
import ReactDOM from "react-dom";
import { Card, Avatar} from 'antd';
import "antd/dist/antd.css";

const { Meta } = {
    title: 'Elon Musk',
    description:'Elon Reeve Musk FRS is a business magnate, inductrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
    avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
    cover: 'http://media.vanityfiar.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive-contributor-profile-elo-musk.jpg'
}

const element = (
    <div>
       <Card
           cover={<img alt="example" src={Card.cover} />}
           actions={[<a href="#">More</a>]}
       >
           <Meta
               avatar={<Avatar src={Card.avatar} />}
               title={Card.title}
               description={Card.description}
           />
       </Card>
    </div>
   );
   

ReactDOM.render(element, document.getElementById('root'));
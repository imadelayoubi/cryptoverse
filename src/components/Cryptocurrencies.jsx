import React,{useState} from 'react';
import millify  from "millify";
import { Link } from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoapi';

const Cryptocurrencies = () => {
    const {data : cryptosList,isFetching} = useGetCryptosQuery();

    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    console.log(cryptos);
    return (
    <>
        <Row gutter={[32,32]} className='crypto-card-container'>
            {cryptos.map((currency)=>{
                return (
                    <Col xs={24} sm={12} lg={6} key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                        <Card title={`${currency.rank}. ${currency.name}`}
                        extra={<img className='crypto-img' src={currency.iconUrl}/>}
                        hoverable
                        >
                            <p>Price: {currency.price}</p>
                            </Card>    
                         </Link>
                    </Col>
                )

            })}
        </Row>
        </>
   )
}


export default Cryptocurrencies;
import React from 'react';
import {Card} from "../../components/ui/card"
import Image from "next/image"
import Products from '../_mockData/Products';
import {Button} from "../../components/ui/button"

function ProductCardItem ({product}) {
    return (
        <div>
            <Card className="p-3">
                <Image src={product?.image}  alt={product.name} width={400} height={300}/>
                <div className='mt-3'>
                    <h2 className="font-bold text-xl">{product.name}</h2>
                    <h2 className='font-bold text-2xl text-yellow-500'>${product?.price}</h2>
                    <div className="mt-3 md:flex justify-between items-center">
                        <div className='flex items-center gap-2'>
                            <Image src={product?.user?.image} alt='user' width={20} height={20} className='rounded-full'/>
                            <h2 className='text-sm text-gray-400'>{product?.user.name}</h2>
                        </div>
                        <Button size="sm" className="mt-1">Add to Cart</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProductCardItem
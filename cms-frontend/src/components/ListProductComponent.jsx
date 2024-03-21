import React,{useEffect, useState} from 'react'
import { listProduct } from '../services/ProductService'

const ListProductComponent = () => {

    const [products,setProducts] = useState([])

    useEffect (()=> {

      listProduct().then((response) => {
        setProducts(response.data);
      }).catch(error => {
        console.error(error);
      })

    },[])


  return (
    <div className='container'>
      <h2 className='text-center'>Ürün Listesi</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>ÜRÜN ADI</th>
            <th>ALIŞ FİYAT</th>
            <th>PEŞİN SATIŞ FİYAT</th>
            <th>VADELİ SATIŞ FİYAT</th>
            <th>NAKLİYELİ SATIŞ FİYAT</th>
            <th>STOK MİKTAR</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product =>
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.purchasePrice}</td>
                <td>{product.priceForCash}</td>
                <td>{product.priceForForwardSale}</td>
                <td>{product.priceForWithTransportation}</td>
                <td>{product.stockAmountAsLiter}</td>
                
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListProductComponent
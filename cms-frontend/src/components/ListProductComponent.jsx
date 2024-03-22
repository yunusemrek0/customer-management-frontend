import React,{useEffect, useState} from 'react'
import { listProduct } from '../services/ProductService'
import { useNavigate } from 'react-router-dom'

const ListProductComponent = () => {

    const [products,setProducts] = useState([])

    const navigator = useNavigate();

    useEffect (()=> {

      listProduct().then((response) => {
        setProducts(response.data);
      }).catch(error => {
        console.error(error);
      })

    },[])

    function addNewProduct(){
        navigator('/product/save')
    }

    function updateProduct(id){
        navigator(`/product/update/${id}`)
    }

  return (
    <div className='container'>
      <h2 className='text-center'>ÜRÜN LİSTESİ</h2>
 
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
            <th></th>
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
                <td>
                  <button className='btn btn-success mb-2' onClick={() => updateProduct(product.id)}>GÜNCELLE</button>
                </td>
                
              </tr>)
          }
        </tbody>
      </table>
      <button className='btn btn-primary mb-2' onClick={addNewProduct}>ÜRÜN EKLE</button>
    </div>
  )
}

export default ListProductComponent
import React, {useState} from 'react'
import { createProduct } from '../services/ProductService'
import { useNavigate } from 'react-router-dom';

const ProductComponent = () => {

    const[name,setName] = useState('')
    const[purchasePrice,setpurchasePrice] = useState('')
    const[priceForCash,setpriceForCash] = useState('')
    const[priceForForwardSale,setpriceForForwardSale] = useState('')
    const[priceForWithTransportation,setpriceForWithTransportation] = useState('')
    const[stockAmountAsLiter,setstockAmountAsLiter] = useState('')
    const[dealerId,setdealerId] = useState('')

    const navigator = useNavigate();

    function saveProduct(e){
        e.preventDefault();

        const product = {name,purchasePrice,priceForCash,priceForForwardSale,priceForWithTransportation,stockAmountAsLiter,dealerId}
        console.log(product)

        createProduct(product).then((response) =>{
            console.log(response.data);
            navigator('/product/getAll')
        })
    }



  return (
    <div className='container'>
        <div className='row'>

            <div className='card col-md-6 offset-md-3 offset-md-3' >
                <h2 className='text-center'>ÜRÜN EKLE</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN ADI:</label>
                            <input type="text" placeholder='ÜRÜN ADI GİRİNİZ' name='name' value={name} className='form-control' onChange={(e) => setName(e.target.value)}></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN ALIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN ALIŞ FİYAT GİRİNİZ' name='purchasePrice' value={purchasePrice} className='form-control' onChange={(e) => setpurchasePrice(e.target.value)}></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN NAKİT SATIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN NAKİT SATIŞ FİYAT GİRİNİZ' name='priceForCash' value={priceForCash} className='form-control' onChange={(e) => setpriceForCash(e.target.value)}></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN VADELİ SATIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN VADELİ SATIŞ FİYAT GİRİNİZ' name='priceForForwardSale' value={priceForForwardSale} className='form-control' onChange={(e) => setpriceForForwardSale(e.target.value)}></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN NAKLİYELİ SATIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN NAKLİYELİ SATIŞ FİYAT GİRİNİZ' name='priceForWithTransportation' value={priceForWithTransportation} className='form-control' onChange={(e) => setpriceForWithTransportation(e.target.value)}></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN STOK MİKTAR:</label>
                            <input type="text" placeholder='ÜRÜN STOK MİKTAR GİRİNİZ' name='stockAmountAsLiter' value={stockAmountAsLiter} className='form-control' onChange={(e) => setstockAmountAsLiter(e.target.value)}></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>BAYİİ:</label>
                            <input type="text" placeholder='BAYİİ GİRİNİZ' name='dealerId' value={dealerId} className='form-control' onChange={(e) => setdealerId(e.target.value)}></input>
                        </div>

                        <button className='btn btn-success' onClick={saveProduct} >KAYDET</button>
     
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default ProductComponent
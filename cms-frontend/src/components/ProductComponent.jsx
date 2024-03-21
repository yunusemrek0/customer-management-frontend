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

   

    const [errors,setErrors] = useState({
        name:'',
        purchasePrice:'',
        priceForCash:'',
        priceForForwardSale:'',
        priceForWithTransportation:'',
        stockAmountAsLiter:'',
        dealerId:''
    })

    const navigator = useNavigate();

    function saveProduct(e){
        e.preventDefault();

        if(validateForm()){
            const product = {name,purchasePrice,priceForCash,priceForForwardSale,priceForWithTransportation,stockAmountAsLiter,dealerId}
            console.log(product)
    
            createProduct(product).then((response) =>{
                console.log(response.data);
                navigator('/product/getAll')
            })
        }


    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(name.trim()){
            errorsCopy.name = '';
        }else{
            errorsCopy.name = 'ÜRÜN ADI KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }

        if(purchasePrice.trim()){
            errorsCopy.purchasePrice = '';
        }else{
            errorsCopy.purchasePrice = 'ALIŞ FİYAT KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }

        if(priceForCash.trim()){
            errorsCopy.priceForCash = '';
        }else{
            errorsCopy.priceForCash = 'NAKİT SATIŞ FİYAT KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }

        if(priceForForwardSale.trim()){
            errorsCopy.priceForForwardSale = '';
        }else{
            errorsCopy.priceForForwardSale = 'VADELİ SATIŞ FİYAT KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }

        
        if(priceForWithTransportation.trim()){
            errorsCopy.priceForWithTransportation = '';
        }else{
            errorsCopy.priceForWithTransportation = 'NAKLİYELİ SATIŞ FİYAT KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }
                
        if(stockAmountAsLiter.trim()){
            errorsCopy.stockAmountAsLiter = '';
        }else{
            errorsCopy.stockAmountAsLiter = 'STOK MİKTAR KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }

        if(dealerId.trim()){
            errorsCopy.dealerId = '';
        }else{
            errorsCopy.dealerId = 'BAYİİ KISMI BOŞ GEÇİLEMEZ'
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
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
                            <input type="text" placeholder='ÜRÜN ADI GİRİNİZ' name='name' value={name} className={`form-control ${errors.name ? 'is-invalid':''}`}  onChange={(e) => setName(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.name} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN ALIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN ALIŞ FİYAT GİRİNİZ' name='purchasePrice' value={purchasePrice} className={`form-control ${errors.purchasePrice ? 'is-invalid':''}`} onChange={(e) => setpurchasePrice(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.purchasePrice} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN NAKİT SATIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN NAKİT SATIŞ FİYAT GİRİNİZ' name='priceForCash' value={priceForCash} className={`form-control ${errors.priceForCash ? 'is-invalid':''}`} onChange={(e) => setpriceForCash(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.priceForCash} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN VADELİ SATIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN VADELİ SATIŞ FİYAT GİRİNİZ' name='priceForForwardSale' value={priceForForwardSale} className={`form-control ${errors.priceForForwardSale ? 'is-invalid':''}`} onChange={(e) => setpriceForForwardSale(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.priceForForwardSale} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN NAKLİYELİ SATIŞ FİYAT:</label>
                            <input type="text" placeholder='ÜRÜN NAKLİYELİ SATIŞ FİYAT GİRİNİZ' name='priceForWithTransportation' value={priceForWithTransportation} className={`form-control ${errors.priceForWithTransportation ? 'is-invalid':''}`} onChange={(e) => setpriceForWithTransportation(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.priceForWithTransportation} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>ÜRÜN STOK MİKTAR:</label>
                            <input type="text" placeholder='ÜRÜN STOK MİKTAR GİRİNİZ' name='stockAmountAsLiter' value={stockAmountAsLiter} className={`form-control ${errors.stockAmountAsLiter ? 'is-invalid':''}`} onChange={(e) => setstockAmountAsLiter(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.stockAmountAsLiter} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>BAYİİ:</label>
                            <input type="text" placeholder='BAYİİ GİRİNİZ' name='dealerId' value={dealerId} className={`form-control ${errors.dealerId ? 'is-invalid':''}`} onChange={(e) => setdealerId(e.target.value)}></input>
                            {errors.name && <div className='invalid-feedback'> {errors.dealerId} </div> }
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
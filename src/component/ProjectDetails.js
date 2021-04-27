import {useState } from "react";

const ProductDetails =()=>{
    let reader = new FileReader();
    const [volatile, setVolatile] = useState({
        productName:'',
        productPrice: 0,
        productDescription:'',
        productImage: '',
        tabaleDetails : JSON.parse(localStorage.getItem('data')) || [],
    })

    const handleClick = () => {
        let localData = localStorage.getItem("data");
        localData = JSON.parse(localData) || [];
        let arr = localData;
        const {productName, productImage, productPrice, productDescription} = volatile || '';
        const data = {
            productName,
            productPrice,
            productImage,
            productDescription
        }
        arr.push(data);
        setVolatile((state)=>({
            ...state,
            tabaleDetails:arr,
            productName:'',
            productPrice: 0,
            productDescription:'',
            productImage:''
        }))
        try {
            localStorage.setItem("data",JSON.stringify(arr));
        } catch (error) {
            console.log("Getting error in local Storage")
        }
       
    }

    const handleChange = (e)=>{
        const {target} = e;
        const {name, value} = target;
        if(name === 'productImage'){
            reader.readAsDataURL(e.target.files[0]);

            reader.addEventListener('load',()=>{
                const image = reader.result;
                setVolatile((state)=>({
                    ...state,
                    productImage:image
                }))
            })
        }
        setVolatile((state)=>({
            ...state,
            [name]:value,
        }))
    
    }

    const handleOnRemove =(i)=>{
        const dataArray = [...volatile.tabaleDetails];
        dataArray.splice(i,1);
        
        setVolatile((state)=>({
            ...state,
            tabaleDetails:dataArray
        }))

        localStorage.setItem("data", JSON.stringify(dataArray))
    }

    return(
        <div className="container">
            <div className="form">
                <div className="productName">
                    <label>Product name</label><br/>
                    <input onChange={handleChange} name="productName" value={volatile?.productName} type="text" placeholder="Enter product name" style={{width:"100%"}}/>
                </div>
                <div className="price">
                    <label>Product price</label><br/>
                    <input type="number" onChange={handleChange} value={volatile?.productPrice} name="productPrice" placeholder="Enter price" style={{width:"100%"}}></input>
                </div>
                <div className="productDescription">
                    <label>Product description</label><span>(optional)</span><br/>
                    <textarea rows="3" name="productDescription" value={volatile?.productDescription} onChange={handleChange} placeholder="Enter description" style={{width:"100%"}}></textarea>
                </div>
                <div className="productImage">
                    <label>Product image</label><span>(optional)</span><br/>
                    <input type="file" onChange={handleChange} name="productImage"></input>
                </div>
                <div className="addProduct">
                <label onClick={handleClick} style={{backgroundColor:"#0275d8",color:"#ffffff",cursor:"pointer",padding:"6px"}}>Add product</label>
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>productName</th>
                    <th>productDescription</th>
                    <th>productPrice</th>
                </tr>
                </thead>
                <tbody>
                    {
                        (volatile?.tabaleDetails || [])?.map((d,i)=>{
                            return(
                                <tr key={i}>
                                    <td><img src={d.productImage} alt="loading" style={{height:"30px",width:"30px"}}/></td>
                                    <td>{d.productName}</td>
                                    <td>{d.productDescription}</td>
                                    <td>{d.productPrice}</td>
                                    <td><label id='remove' onClick={()=>handleOnRemove(i)} >Remove</label></td>
                                </tr>
                            )
                        })
                    }
                
                </tbody>
    
            </table>
        </div>
    )
}
export default ProductDetails;
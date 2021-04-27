const Card =({productImage, productName,productPrice,productDescription})=>{
    return(
        
        <div className='card'>
                <img src={productImage} alt='loading...'
                  style={{width:"100%",height:"160px"}}>
                </img>
            <div className='cardsection'>
                <div>
                    <label>{productName}</label><br/>
                    <label>{productDescription}</label>   
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <label>{productPrice}:-</label>
                </div>
            </div>  
        </div>
    )
}
export default Card;
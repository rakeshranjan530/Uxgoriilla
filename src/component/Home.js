import Card from "./Card"

const Home =()=>{
    const details = JSON.parse(localStorage.getItem("data")) || [];
    return(
        <div className="container">
            <div className="Section">
                {
                    details?.map((d,i)=>{
                        return(
                            <Card key={i}
                                productImage={d.productImage}
                                productName={d.productName}
                                productPrice={d.productPrice}
                                productDescription={d.productDescription}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home;









var deals= [
    {
    image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg" ,
    name : "Products",
    price:250

},
{
    image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17391962-2de8-4aba-b258-78182673d8b5_425x425.jpg",
    name:"RAW PRESSERY COLD COFFEE 200ML",
    price:250
    
},
{
    image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1350957_1_425x425.jpg", 
    name:"juice",
    price:250

},
{
    image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fea16353-c9c1-4124-9381-d5b19d144894_425x425.jpg",
    name:"floor",
    price:250
    
},




]
display(deals);



function display(deals){

    deals.forEach(element => {
        console.log(deals)
        let div=document.createElement("div")
        div.setAttribute("class","carousel-cell")
        div.setAttribute("id","for-image")

        let image=document.createElement("img")
        image.src=element.image_url;

        
        let Product =document.createElement("P")
        Product.innerText=element.name;

        let Price=document.createElement("p")
        Price.innerText=element.price

        

        div.append(image,Product,Price)

        document.querySelector(".main-carousel").append(div);
    });
}























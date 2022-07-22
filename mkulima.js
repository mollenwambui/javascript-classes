class Mkulima{
    constructor(){
        this.farm=[]
        this.products=[]
        this.orders=[]
        this.addFarm=(farmId,farmname,farmer,phonenumber,address)=>{
            this.farm.push({farmId,farmname,farmer,phonenumber,address})
        }
        this.removeFarm=(farmId)=>{
        let remove=this.farm.find(element=>element.farmId==farmId);
        let specificItem=this.farm.indexOf(remove);
        this.farm.splice(specificItem,1)
        }
        this.updateFarm=(farmId,farmId2,farmname2,farmer2,phonenumber2,address2)=>{
        let newfarm=this.farm.find(item=>item.farmId==farmId)
        newfarm.farmId=farmId2
        newfarm.farmname=farmname2
        newfarm.farmer=farmer2
        newfarm.phonenumber=phonenumber2
        newfarm.address=address2

        }
        this.getFarm=(farmid)=>{
         console.log(this.farm.find(object=>object.farmId=farmid))   
        }
        this.addProduct=(productId,name,price)=>{
            this.products.push({productId,name,price})
        }
        this.removeProduct=(productId)=>{
            let item=this.products.find(element=>element.productId==productId);
            let indexItem=this.products.indexOf(item)
            this.products.splice(indexItem,1)
        }
        this.updateProduct=(productId,newProductId,newname,newprice)=>{
            let newproducts=this.products.find(item=>item.productId==productId)
             newproducts.productId=newProductId
             newproducts.name=newname
             newproducts.price=newprice
        }
        this.getProducts=(productId)=>{
            console.log(this.products.find(element=>element.productId=productId))
        }
        this.printProducts=()=>{
            console.log(this.products)
        }
        this.calculateOrderCost=(productId,quantity)=>{
            let selectedProduct=this.products.find(item=>item.productId=productId)
            let totalprice=quantity*selectedProduct.price
            console.log(`${quantity}  ${selectedProduct} for KSH  ${totalprice}`)
        }
       
    }
    
}
       let myfarm=new Mkulima();
       myfarm.addFarm("123","Kisumu","Mollen","072345678","Karen Nairobi")
       myfarm.addFarm('5T6Y','JUly','Marryann','09876332','Kiambuu')
       myfarm.addFarm('789','Max','Lucy','07876332','Dagoretti')
       myfarm.addFarm('123','Min','Denno','012876332','Kileleshwa')
       myfarm.addFarm('kit','Char','Franco','019876332','Ruai')
       myfarm.addProduct('234','Spinach',200)
       myfarm.addProduct('456','Maize',500)
       myfarm.calculateOrderCost(234,10)
       console.log(myfarm.farm)
       myfarm.removeFarm("789")


       
       
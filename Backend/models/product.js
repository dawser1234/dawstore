const mongoose=require ("mongoose");
const user =require("./user")



const productSchema = new mongoose.Schema({
    title:{type:String,require:true},
    description: {type:String},
    price:{type:Number},
    img:{type:String},
    seller: { type: mongoose.Schema.Types.ObjectId,ref:user },
}
);

const product=mongoose.model("product",productSchema)

module.exports=product
const { Router } = require("express");
const { ProductModel } = require("../Models/product.model");
const ProductRoute = Router();


ProductRoute.get("/women", async (req, res) => {
  // try {
  //   const data = await ProductModel.find({type1:"women" });
  //   res.status(200).send(data);
  // } catch (error) {
  //   res.send(error);
  // }

   const { sort, prod_name, size, type1 } = req.query;
   try {
     if (sort) {
       if (sort === "price") {
         let ndata = await ProductModel.find({ type1: "women" }).sort({
           price: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "prod_name") {
         let ndata = await ProductModel.find({ type1: "women" }).sort({
           prod_name: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "type1") {
         let ndata = await ProductModel.find({ type1: "women" }).sort({
           type1: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "type2") {
         let ndata = await ProductModel.find({ type1: "women" }).sort({
           type2: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "prod_name") {
         let ndata = await ProductModel.find({ type1: "women" }).sort({
           prod_name: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "size") {
         let ndata = await ProductModel.find({ type1: "women" }).sort({
           size: 1,
         });
         return res.status(200).send(ndata);
       } else {
         const data = await ProductModel.find({ type1: "women" });
         res.status(200).send(data);
       }
     } else {
       if (prod_name) {
         let data = await ProductModel.find({
           $and: [{ type1: "women" }, { prod_name: { $regex: prod_name } }],
         });
         return res.status(200).send(data);
       }
       if (size) {
         let data = await ProductModel.find({
           $and: [{ type1: "women" }, { size }],
         });
         return res.status(200).send(data);
       } else {
         const data = await ProductModel.find({ type1: "women" });
         res.status(200).send(data);
       }
     }
   } catch (error) {
     res.send(error);
   }
});
ProductRoute.get("/kids", async (req, res) => {
  // try {
  //   const data = await ProductModel.find({ type1: "kids" });
  //   res.status(200).send(data);
  // } catch (error) {
  //   res.send(error);
  // }

   const { sort, prod_name, size, type1 } = req.query;
   try {
     if (sort) {
       if (sort === "price") {
         let ndata = await ProductModel.find({ type1: "kids" }).sort({
           price: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "prod_name") {
         let ndata = await ProductModel.find({ type1: "kids" }).sort({
           prod_name: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "type1") {
         let ndata = await ProductModel.find({ type1: "kids" }).sort({
           type1: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "type2") {
         let ndata = await ProductModel.find({ type1: "kids" }).sort({
           type2: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "prod_name") {
         let ndata = await ProductModel.find({ type1: "kids" }).sort({
           prod_name: 1,
         });
         return res.status(200).send(ndata);
       } else if (sort === "size") {
         let ndata = await ProductModel.find({ type1: "kids" }).sort({
           size: 1,
         });
         return res.status(200).send(ndata);
       } else {
         const data = await ProductModel.find({ type1: "kids" });
         res.status(200).send(data);
       }
     } else {
       if (prod_name) {
         let data = await ProductModel.find({
           $and: [{ type1: "kids" }, { prod_name: { $regex: prod_name } }],
         });
         return res.status(200).send(data);
       }
       if (size) {
         let data = await ProductModel.find({
           $and: [{ type1: "kids" }, { size }],
         });
         return res.status(200).send(data);
       } else {
         const data = await ProductModel.find({ type1: "kids" });
         res.status(200).send(data);
       }
     }
   } catch (error) {
     res.send(error);
   }
});
ProductRoute.get("/men", async (req, res) => {
  // try {
  //   const data = await ProductModel.find({type1:"Men"});
  //   res.status(200).send(data);
  // } catch (error) {
  //   res.send(error);
  // }



  const { sort, prod_name, size, type1 } = req.query;
  try {
    if (sort) {
      if (sort === "price") {
        let ndata = await ProductModel.find({type1: "Men" }).sort({ price: 1 });
        return res.status(200).send(ndata);
      } else if (sort === "prod_name") {
        let ndata = await ProductModel.find({type1: "Men" }).sort({ prod_name: 1 });
        return res.status(200).send(ndata);
      } else if (sort === "type1") {
        let ndata = await ProductModel.find({type1: "Men" }).sort({ type1: 1 });
        return res.status(200).send(ndata);
      } else if (sort === "type2") {
        let ndata = await ProductModel.find({type1: "Men" }).sort({ type2: 1 });
        return res.status(200).send(ndata);
      } else if (sort === "prod_name") {
        let ndata = await ProductModel.find({type1: "Men" }).sort({ prod_name: 1 });
        return res.status(200).send(ndata);
      } else if (sort === "size") {
        let ndata = await ProductModel.find({type1: "Men" }).sort({ size: 1 });
        return res.status(200).send(ndata);
      } else {
       const data = await ProductModel.find({ type1: "Men" });
       res.status(200).send(data);
      }
    } else {
      if (prod_name) {
        let data = await ProductModel.find(   {$and:[{type1: "Men" },{prod_name: { $regex: prod_name }}]});
        return res.status(200).send(data);
      }
      if (size) {
        let data = await ProductModel.find({$and:[{type1: "Men" },{ size }]});
        return res.status(200).send(data);
      }
      else {
        const data = await ProductModel.find({ type1: "Men" });
        res.status(200).send(data);
      }
    }
  } catch (error) {
    res.send(error);
  }
});

ProductRoute.get("/product", async (req, res) => {
  const {sort,prod_name,size,type1}=req.query
  try {
    if(sort){
       if (sort === "price") {
         let ndata = await ProductModel.find({}).sort({ price: 1 });
         return res.status(200).send(ndata);
       } else if (sort === "prod_name") {
         let ndata = await ProductModel.find({}).sort({ prod_name: 1 });
         return res.status(200).send(ndata);
       } else if (sort === "type1") {
         let ndata = await ProductModel.find({}).sort({ type1: 1 });
         return res.status(200).send(ndata);
       } else if (sort === "type2") {
         let ndata = await ProductModel.find({}).sort({ type2: 1 });
         return res.status(200).send(ndata);
       } else if (sort === "prod_name") {
         let ndata = await ProductModel.find({}).sort({ prod_name: 1 });
         return res.status(200).send(ndata);
       } else if (sort === "size") {
         let ndata = await ProductModel.find({}).sort({ size: 1 });
         return res.status(200).send(ndata);
       } else {
          const data = await ProductModel.find({});
          res.status(200).send(data);
       }
    }
    else{
       if(prod_name){
        let data = await ProductModel.find({prod_name:{"$regex":prod_name}})
       return res.status(200).send(data);
       }
       if(size){
        let data = await ProductModel.find({size})
       return res.status(200).send(data);
       }
       if(type1){
        let data = await ProductModel.find({type1})
       return res.status(200).send(data);
       }
       else{
        const data = await ProductModel.find({});
        res.status(200).send(data);
       }
    }
   
    
  } catch (error) {
    res.send(error);
  }
});



ProductRoute.post("/product", async (req, res) => {
  try {
    const { prod_name, imgUrl, price, size, type1, type3, material } = req.body;

    const data = new ProductModel({
      prod_name,
      imgUrl,
      price,
      size,
      type1,
      type3,
      material
    });
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

ProductRoute.patch("/blogs/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    let data = await ProductModel.findOneAndUpdate(
      { userId, _id: id },
      { ...req.body }
    );
    res.status(201).send("Updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

ProductRoute.delete("/blogs/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await ProductModel.findOneAndDelete({ userId, _id: id });
    res.status(201).send("deleted");
  } catch (error) {
    res.send(error);
  }
});

module.exports = { ProductRoute };

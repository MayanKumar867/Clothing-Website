import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"


export const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        console.log("REQ FILES:", req.files); // Debugging

        let image1 = req.files?.image1 ? await uploadOnCloudinary(req.files.image1[0].path) : "";
        let image2 = req.files?.image2 ? await uploadOnCloudinary(req.files.image2[0].path) : "";
        let image3 = req.files?.image3 ? await uploadOnCloudinary(req.files.image3[0].path) : "";
        let image4 = req.files?.image4 ? await uploadOnCloudinary(req.files.image4[0].path) : "";

        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: (() => {
                try {
                    return JSON.parse(sizes);
                } catch {
                    return sizes?.split(",") || [];
                }
            })(),
            bestseller: bestseller === "true",
            date: Date.now(),
            image1,
            image2,
            image3,
            image4
        };

        const product = await Product.create(productData);

        return res.status(201).json(product);

    } catch (error) {
        console.error("AddProduct error", error);
        return res.status(500).json({ message: `AddProduct error: ${error.message}` });
    }
};





export const listProduct = async (req,res) => {
     
    try {
        const product = await Product.find({});
        return res.status(200).json(product)

    } catch (error) {
        console.log("ListProduct error")
        return res.status(500).json({message:`List Product error ${error}`})
    }
}

export const removeProduct = async (req,res) => {
    try {
        let {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
         return res.status(200).json(product)
    } catch (error) {
        console.log("Remove Product error")
        return res.status(500).json({message:`Remove Product error ${error}`})
    }
}

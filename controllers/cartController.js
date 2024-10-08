import userModel from "../models/userModel.js"

//add items to the cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cart;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cart: cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Failed to add cart"})
    }
}

//remove items from cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cart;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cart: cartData });
        res.json({ success: true, message: "Item removed from the cart" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Failed to remove from cart"})
    }
}

//fetch user's cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cart;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error while fetching cart details"})
    }
}

export {addToCart,removeFromCart,getCart}
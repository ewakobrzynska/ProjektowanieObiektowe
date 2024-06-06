package com.example.myapplication

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.models.Cart
import com.example.myapplication.models.CartItem

class CartAdapter(private val cartItems: List<CartItem>) : RecyclerView.Adapter<CartAdapter.CartViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CartViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_cart, parent, false)
        return CartViewHolder(view)
    }

    override fun onBindViewHolder(holder: CartViewHolder, position: Int) {
        val cartItem = cartItems[position]
        holder.productName.text = cartItem.product.name
        holder.productQuantity.text = "Quantity: ${cartItem.quantity}"
        holder.productPrice.text = "$${cartItem.product.price * cartItem.quantity}"

        holder.removeFromCartButton.setOnClickListener {
            Cart.removeItem(cartItem.product)
            notifyDataSetChanged()
        }
    }

    override fun getItemCount(): Int {
        return cartItems.size
    }

    class CartViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val productName: TextView = itemView.findViewById(R.id.cart_product_name)
        val productQuantity: TextView = itemView.findViewById(R.id.cart_product_quantity)
        val productPrice: TextView = itemView.findViewById(R.id.cart_product_price)
        val removeFromCartButton: Button = itemView.findViewById(R.id.remove_from_cart_button)
    }
}

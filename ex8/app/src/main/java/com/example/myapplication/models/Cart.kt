package com.example.myapplication.models

data class CartItem(
    val product: Product,
    var quantity: Int
)

object Cart {
    private val items = mutableListOf<CartItem>()

    fun addItem(product: Product) {
        val item = items.find { it.product.id == product.id }
        if (item != null) {
            item.quantity += 1
        } else {
            items.add(CartItem(product, 1))
        }
    }

    fun removeItem(product: Product) {
        val item = items.find { it.product.id == product.id }
        if (item != null) {
            if (item.quantity > 1) {
                item.quantity -= 1
            } else {
                items.remove(item)
            }
        }
    }

    fun getItems(): List<CartItem> = items
}

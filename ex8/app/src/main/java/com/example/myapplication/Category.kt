package com.example.myapplication

data class Category(
    val id: Int,
    val name: String,
    val products: List<Product>
)

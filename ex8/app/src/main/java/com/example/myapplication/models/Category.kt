package com.example.myapplication.models

data class Category(
    val id: Int,
    val name: String,
    val products: List<Product>
)

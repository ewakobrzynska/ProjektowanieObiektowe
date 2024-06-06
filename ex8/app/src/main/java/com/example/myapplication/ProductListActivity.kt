package com.example.myapplication

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.models.Product

class ProductListActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_product_list)

        val categoryId = intent.getIntExtra("CATEGORY_ID", -1)
        val categoryName = intent.getStringExtra("CATEGORY_NAME") ?: ""

        title = categoryName

        val recyclerView: RecyclerView = findViewById(R.id.recycler_view_products)
        recyclerView.layoutManager = LinearLayoutManager(this)

        val products = getProductsByCategoryId(categoryId)
        val adapter = ProductAdapter(products)
        recyclerView.adapter = adapter
    }

    private fun getProductsByCategoryId(categoryId: Int): List<Product> {

        return when (categoryId) {
            1 -> listOf(
                Product(1, "Smartphone", "Latest model", 699.99),
                Product(2, "Laptop", "High performance", 1299.99)
            )
            2 -> listOf(
                Product(3, "T-shirt", "100% cotton", 19.99),
                Product(4, "Jeans", "Slim fit", 49.99)
            )
            else -> emptyList()
        }
    }
}

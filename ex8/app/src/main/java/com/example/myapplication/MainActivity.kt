package com.example.myapplication

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val recyclerView: RecyclerView = findViewById(R.id.recycler_view)
        recyclerView.layoutManager = LinearLayoutManager(this)

        val categories = getSampleCategories()
        val adapter = CategoryAdapter(categories)
        recyclerView.adapter = adapter
    }

    private fun getSampleCategories(): List<Category> {
        val products1 = listOf(
            Product(1, "Product 1", "Description 1", 9.99),
            Product(2, "Product 2", "Description 2", 19.99)
        )
        val products2 = listOf(
            Product(3, "Product 3", "Description 3", 29.99),
            Product(4, "Product 4", "Description 4", 39.99)
        )

        return listOf(
            Category(1, "Category 1", products1),
            Category(2, "Category 2", products2)
        )
    }
}

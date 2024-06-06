package com.example.myapplication

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.models.Category
import com.example.myapplication.models.Product

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val recyclerView: RecyclerView = findViewById(R.id.recycler_view)
        recyclerView.layoutManager = LinearLayoutManager(this)

        val categories = listOf(
            Category(1, "Electronics", listOf(
                Product(1, "Smartphone", "Latest model", 699.99),
                Product(2, "Laptop", "High performance", 1299.99)
            )),
            Category(2, "Clothing", listOf(
                Product(3, "T-shirt", "100% cotton", 19.99),
                Product(4, "Jeans", "Slim fit", 49.99)
            ))
        )

        val adapter = CategoryAdapter(categories)
        recyclerView.adapter = adapter

        val viewCartButton: Button = findViewById(R.id.button_view_cart)
        viewCartButton.setOnClickListener {
            startActivity(Intent(this, CartActivity::class.java))
        }
    }
}

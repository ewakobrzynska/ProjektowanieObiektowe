package com.example.myapplication.repositories

import com.example.myapplication.models.Product
import io.realm.Realm

class ProductRepository {
    fun addProduct(product: Product) {
        val realm = Realm.getDefaultInstance()
        realm.executeTransaction { realmInstance ->
            val maxId = realmInstance.where(Product::class.java).max("id")
            val nextId = (maxId?.toLong() ?: 0L) + 1L
            product.id = nextId
            realmInstance.copyToRealm(product)
        }
        realm.close()
    }
}

package com.example.myapplication.models

import io.realm.RealmObject
import io.realm.annotations.PrimaryKey
import io.realm.Realm
open class CartItem : RealmObject() {
    @PrimaryKey
    var productId: Int = 0
    var quantity: Int = 0
}

object Cart {
    fun addItem(realm: Realm, productId: Int) {
        realm.executeTransaction { realmInstance ->
            var cartItem = realmInstance.where(CartItem::class.java).equalTo("productId", productId).findFirst()
            if (cartItem != null) {
                cartItem.quantity += 1
            } else {
                cartItem = realmInstance.createObject(CartItem::class.java, productId)
                cartItem.quantity = 1
            }
        }
    }

    fun removeItem(realm: Realm, productId: Int) {
        realm.executeTransaction { realmInstance ->
            val cartItem = realmInstance.where(CartItem::class.java).equalTo("productId", productId).findFirst()
            if (cartItem != null) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity -= 1
                } else {
                    cartItem.deleteFromRealm()
                }
            }
        }
    }

    fun getItems(realm: Realm): List<CartItem> {
        val cartItems = realm.where(CartItem::class.java).findAll()
        return realm.copyFromRealm(cartItems)
    }
}

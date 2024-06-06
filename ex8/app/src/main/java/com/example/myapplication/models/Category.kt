package com.example.myapplication.models

import io.realm.RealmList
import io.realm.RealmObject
import io.realm.annotations.PrimaryKey

open class Category : RealmObject() {
    @PrimaryKey
    var id: Int = 0
    var name: String = ""
    var products: RealmList<Product> = RealmList()
}

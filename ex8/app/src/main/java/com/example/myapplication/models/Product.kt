package com.example.myapplication.models

import io.realm.RealmObject
import io.realm.annotations.PrimaryKey

open class Product : RealmObject() {
    @PrimaryKey
    var id: Long = 0
    var name: String = ""
    var price: Double = 0.0
    var description: String = ""
}
package com.example.myapplication.models

import io.realm.gradle.Realm.RealmObject;
import io.realm.gradle.Realm
import io.realm.annotations.PrimaryKey

open class Product : RealmObject() {
    @PrimaryKey
    var id: Long = 0
    var name: String = ""
    var price: Double = 0.0
    var description: String = ""
}
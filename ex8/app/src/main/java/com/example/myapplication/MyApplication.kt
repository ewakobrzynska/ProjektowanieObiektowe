package com.example.myapplication

import android.app.Application
import io.realm.gradle.Realm

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Realm.init(this)

    }
}

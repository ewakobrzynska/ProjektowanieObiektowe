plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.jetbrains.kotlin.android)
}

android {
    namespace = "com.example.myapplication"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.myapplication"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.1"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
    buildToolsVersion = "34.0.0"

}

dependencies {

    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.ui.test.junit4)
    debugImplementation(libs.androidx.ui.tooling)
    debugImplementation(libs.androidx.ui.test.manifest)
    implementation("androidx.recyclerview:recyclerview:1.3.2")
    implementation("androidx.cardview:cardview:1.0.0")
    implementation("androidx.constraintlayout:constraintlayout:2.2.0-alpha13")
    val appcompat_version = "1.7.0"
    implementation("androidx.appcompat:appcompat:$appcompat_version")
    implementation("com.google.android.material:material:1.9.0")
// https://mvnrepository.com/artifact/io.realm/realm-gradle-plugin
    implementation("io.realm:realm-gradle-plugin:10.18.0")
    // https://mvnrepository.com/artifact/io.realm/realm-android-library
    implementation("io.realm:realm-android-library:10.18.0")
    // https://mvnrepository.com/artifact/io.realm/realm-annotations
    implementation("io.realm:realm-annotations:10.18.0")
// https://mvnrepository.com/artifact/io.realm/realm
    implementation("io.realm:realm:0.69.0")
// https://mvnrepository.com/artifact/io.realm/realm-annotations-processor
    implementation("io.realm:realm-annotations-processor:10.18.0")
// https://mvnrepository.com/artifact/io.realm/android-secure-userstore
    implementation("io.realm:android-secure-userstore:1.0.0")
// https://mvnrepository.com/artifact/io.realm/secure-userstore
    implementation("io.realm:secure-userstore:1.0.1")
    // https://mvnrepository.com/artifact/io.realm/realm-android-kotlin-extensions-object-server
    implementation("io.realm:realm-android-kotlin-extensions-object-server:10.18.0")
// https://mvnrepository.com/artifact/io.realm/realm-transformer
    implementation("io.realm:realm-transformer:10.18.0")
// https://mvnrepository.com/artifact/io.realm/realm-android-library-object-server
    implementation("io.realm:realm-android-library-object-server:10.18.0")
    // https://mvnrepository.com/artifact/io.realm/realm-gradle-plugin
    implementation("io.realm:realm-gradle-plugin:10.18.0")
    // https://mvnrepository.com/artifact/io.realm/android-adapters
    implementation("io.realm:android-adapters:2.1.1")
    // https://mvnrepository.com/artifact/io.realm/realm-android
    implementation("io.realm:realm-android:0.87.5")
// https://mvnrepository.com/artifact/io.realm/realm-android-kotlin-extensions
    implementation("io.realm:realm-android-kotlin-extensions:10.18.0")
// https://mvnrepository.com/artifact/io.realm/realm-android-library
    implementation("io.realm:realm-android-library:10.18.0")






}
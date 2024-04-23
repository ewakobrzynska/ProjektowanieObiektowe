import org.springframework.stereotype.Component

@Component
object AuthManager {

    init {
        println("AuthManager singleton initialized")
    }

    fun authenticate(username: String, password: String): Boolean {
        return username == "admin" && password == "password"
    }
}

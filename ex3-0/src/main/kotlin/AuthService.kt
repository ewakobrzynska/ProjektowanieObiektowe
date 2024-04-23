import org.springframework.stereotype.Service

@Service
class AuthService {

    fun authenticate(username: String, password: String): Boolean {
//        return true
        return username == "admin" && password == "password"

    }
}

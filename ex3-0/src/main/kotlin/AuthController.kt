import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class AuthController {

    @Autowired
    private lateinit var authManager: AuthManager

    @GetMapping("/authenticate")
    fun authenticateUser(@RequestParam username: String, @RequestParam password: String): String {
        val isAuthenticated = authManager.authenticate(username, password)
        return if (isAuthenticated) {
            "User authenticated successfully"
        } else {
            "Authentication failed"
        }
    }
}

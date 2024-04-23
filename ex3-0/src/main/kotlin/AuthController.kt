import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class AuthController {

    @Autowired
    private lateinit var authService: AuthService

    @GetMapping("/authenticate")
    fun authenticate(@RequestParam username: String, @RequestParam password: String): String {
        val isAuthenticated = authService.authenticate(username, password)
        return if (isAuthenticated) {
            "User authenticated successfully"
        } else {
            "Authentication failed"
        }
    }
}

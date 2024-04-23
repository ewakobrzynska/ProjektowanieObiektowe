import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class CustomErrorController : ErrorController {

    @RequestMapping("/error")
    fun handleError(): String {
        // Tutaj możemy zdefiniować niestandardową stronę błędu lub przekierowanie
        return "error" // Zakładając, że istnieje szablon HTML o nazwie "error.html"
    }
}

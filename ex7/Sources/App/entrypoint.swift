import Vapor

@main
struct App {
    static func main() throws {
        let env = try Environment.detect()
        let app = Application(env)
        defer { app.shutdown() }

        try configure(app)

        try app.run()
    }
}

import Vapor

func routes(_ app: Application) throws {
    let productController = ProductController()

    // Register routes
    try app.register(collection: productController)
}

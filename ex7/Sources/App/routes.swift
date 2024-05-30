import Vapor

func routes(_ app: Application) throws {
    let productController = ProductController()

    // Register routes
    try app.register(collection: productController)

    app.post("products") { req -> EventLoopFuture<Product> in
        let product = try req.content.decode(Product.self)
        return product.save(on: req.db).map { product }
    }
}

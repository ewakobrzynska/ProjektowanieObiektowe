import Vapor

struct ProductController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let productsRoute = routes.grouped("products")
        productsRoute.get(use: index)
        productsRoute.post(use: create)
    }

    func index(req: Request) throws -> EventLoopFuture<[Product]> {
        return Product.query(on: req.db).all()
    }

    func create(req: Request) throws -> EventLoopFuture<Product> {
        let product = try req.content.decode(Product.self)
        return product.save(on: req.db).map { product }
    }
}

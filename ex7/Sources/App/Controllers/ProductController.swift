import Vapor

struct ProductController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let productsRoute = routes.grouped("products")
        productsRoute.get(use: index)
        productsRoute.post(use: create)
    }

    func index(req: Request) throws -> EventLoopFuture<View> {
        return Product.query(on: req.db).all().flatMap { products in
            let context = ["products": products]
            return req.view.render("index", context)
        }
    }
    
    func create(req: Request) throws -> EventLoopFuture<Response> {
        let product = try req.content.decode(Product.self)
        return product.save(on: req.db).map { _ in
            return req.redirect(to: "/products")
        }
    }
}

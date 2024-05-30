import Vapor

struct IndexController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        routes.get(use: indexHandler)
    }

    func indexHandler(_ req: Request) throws -> EventLoopFuture<View> {
        return req.view.render("index") 
    }
}

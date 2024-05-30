import FluentSQLiteDriver
import Leaf
import Vapor

public func configure(_ app: Application) throws {
    app.databases.use(.sqlite(.file("db.sqlite")), as: .sqlite)

    // Register Leaf as a view renderer
    app.views.use(.leaf)

    // Register routes
    try routes(app)
}

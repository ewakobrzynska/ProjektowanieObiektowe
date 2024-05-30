import Fluent
import FluentSQLiteDriver

import Vapor

public func configure(_ app: Application) throws {


    app.migrations.add(CreateProduct())

        app.databases.use(.sqlite(.file("db.sqlite")), as: .sqlite)


    // Wykonaj migracje automatycznie
    try app.autoMigrate().wait()

    // Dodaj konfigurację routingu, usług itp.
    try routes(app)
}

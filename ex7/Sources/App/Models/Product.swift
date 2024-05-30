import Vapor
import Fluent

final class Product: Model, Content {
    static let schema = "products"

    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String

   /* @Field(key: "description")
    var description: String*/
    @Field(key: "price")
    var price: Double

    init() { }

    init(id: UUID? = nil, name: String, price: Double) {
        self.id = id
        self.name = name
        self.price = price

    }
}

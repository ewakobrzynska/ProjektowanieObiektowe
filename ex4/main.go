package main

import (
	"projekt4/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	routes.SetupRoutes(e)
	e.Logger.Fatal(e.Start(":8080"))
}
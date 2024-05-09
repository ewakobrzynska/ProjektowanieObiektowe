package routes

import (
	"projekt4/controllers"

	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo) {
	e.GET("/weather", controllers.ReadWeather)
	e.POST("/weather", controllers.ReadWeather)
}
package routes

import (
	"projekt4/controllers"
	"gorm.io/gorm"

	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo, db *gorm.DB) {
	e.GET("/weather", ReadWeatherHandler(db))
	e.POST("/weather", ReadWeatherHandler(db))
}

func ReadWeatherHandler(db *gorm.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		//return controllers.ReadWeather(c, db)
		return controllers.ReadWeather(c)
	}
}
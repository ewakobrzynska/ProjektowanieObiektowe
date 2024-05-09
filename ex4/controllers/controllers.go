package controllers

import (
	/*"projekt4/models"
	"projekt4/scopes"
	"gorm.io/gorm"*/
	"net/http"
	"projekt4/proxy"

	"github.com/labstack/echo/v4"
)

// ReadWeather retrieves weather data from the database and returns it as a JSON response.
func ReadWeather(c echo.Context) error {
	/*var weather models.WeatherModel
	if err := db.Scopes(scopes.WithAllSubmodels).First(&weather).Error; err != nil {
		return c.JSON(http.StatusNotFound, "Weather data not found")
	}

	return c.JSON(http.StatusOK, weather)*/
		service := &proxy.WeatherProxyImpl{}
		weather, err := service.GetWeather()
	
		if err != nil {
			return c.JSON(http.StatusNotFound, "Weather data not found")
		}
		return c.JSON(http.StatusOK, weather)
}

package controllers

import (
	"projekt4/models"
	"projekt4/scopes"
	"gorm.io/gorm"
	"net/http"

	"github.com/labstack/echo/v4"
)

// ReadWeather retrieves weather data from the database and returns it as a JSON response.
func ReadWeather(c echo.Context, db *gorm.DB) error {
	var weather models.WeatherModel
	if err := db.Scopes(scopes.WithAllSubmodels).First(&weather).Error; err != nil {
		return c.JSON(http.StatusNotFound, "Weather data not found")
	}

	return c.JSON(http.StatusOK, weather)
}

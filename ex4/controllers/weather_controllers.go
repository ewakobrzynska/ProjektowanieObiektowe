package controllers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func ReadWeather(c echo.Context) error {
	return c.JSON(http.StatusOK, "1 May, Storm")
}
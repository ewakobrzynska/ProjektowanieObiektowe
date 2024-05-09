package main

import (
	"projekt4/models"
	"projekt4/routes"
	//"projekt4/service"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	//"github.com/labstack/echo/v4"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"

)

func setupDatabase() (*gorm.DB, error) {
	db, err := gorm.Open(sqlite.Open("data.db"), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	err = db.AutoMigrate(&models.Coord{}, &models.Weather{}, &models.Wind{}, &models.Rain{}, &models.Clouds{}, &models.WeatherModel{})
	if err != nil {
		return nil, err
	}

	return db, nil
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		panic("Failed to load .env file")
	}

	db, err := setupDatabase()
	if err != nil {
		panic("Failed to connect/migrate database: " + err.Error())
	}
/*
	weatherData := service.ImportData()
	result := db.Create(weatherData)
	if result.Error != nil {
		panic("Failed to save data in database: " + result.Error.Error())
	}*/

	e := echo.New()
	routes.SetupRoutes(e, db)
	e.Logger.Fatal(e.Start(":8098"))
}

package models

import "gorm.io/gorm"

type Coord struct {
	ID             uint `gorm:"primary_key"`
	Lon            float64
	Lat            float64
	WeatherModelID uint
}

type Weather struct {
	ID             uint `gorm:"primary_key"`
	Main           string
	Description    string
	Icon           string
	WeatherModelID uint
}



type Wind struct {
	ID             uint `gorm:"primary_key"`
	Speed          float64
	Deg            int
	Gust           float64
	WeatherModelID uint
}

type Rain struct {
	ID             uint `gorm:"primary_key"`
	OneH           float64
	WeatherModelID uint
}

type Clouds struct {
	ID             uint `gorm:"primary_key"`
	All            int
	WeatherModelID uint
}

type WeatherModel struct {
	gorm.Model
	Coord      Coord `gorm:"foreignkey:WeatherModelID"`
	Weather    []Weather
	Base       string
	Visibility int
	Wind       Wind
	Rain       Rain
	Clouds     Clouds
	DT         int
	Timezone   int
	ID         int
	Name       string
	Cod        int
}

package models

import "gorm.io/gorm"

type Coord struct {
	ID             uint `gorm:"primary_key"`
	Lon            float64 `json:"lon"`
	Lat            float64 `json:"lat"`
	WeatherModelID uint
}

type Weather struct {
	ID             uint `gorm:"primary_key"`
	Main           string `json:"main"`
	Description    string `json:"description"`
	Icon           string `json:"icon"`
	WeatherModelID uint
}



type Wind struct {
	ID             uint `gorm:"primary_key"`
	Speed          float64 `json:"speed"`
	Deg            int `json:"deg"`
	Gust           float64 `json:"gust"`
	WeatherModelID uint
}

type Rain struct {
	ID             uint `gorm:"primary_key"`
	OneH           float64 `json:"1h"`
	WeatherModelID uint
}

type Clouds struct {
	ID             uint `gorm:"primary_key"`
	All            int `json:"all"`
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

package service

import "projekt4/models"

// ImportData importuje dane pogodowe.
func ImportData() []models.WeatherModel {
	var weatherModel = models.WeatherModel{
		Coord: models.Coord{Lon: 10.99, Lat: 44.34},
		Weather: []models.Weather{{Main: "Deszcz", Description: "umiarkowany deszcz", Icon: "10d"}},
		Wind: models.Wind{Speed: 0.62, Deg: 349, Gust: 1.18},
		Rain: models.Rain{OneH: 3.16},
		Clouds: models.Clouds{All: 100},
		Name: "Warsaw",
		Cod: 200,
	}
	

	return []models.WeatherModel{weatherModel}
}

package proxy

import (
	"projekt4/models"
	"encoding/json"
	"io"
	"net/http"
	"os"
	//"fmt"
)

const (
	BaseURL         = "https://api.openweathermap.org"
	WeatherEndpoint = "/data/2.5/weather"
	Parameters      = "?lat=44.34&lon=10.99"
	APIParameter    = "&appid="
)

type WeatherProxy interface {
	GetWeather() (models.WeatherModel, error)
}
/*
type WeatherProxyImpl struct {
	apiKey string
}

func NewWeatherProxyImpl(apiKey string) *WeatherProxyImpl {
	return &WeatherProxyImpl{apiKey: apiKey}
}
*/


type WeatherProxyImpl struct{}

func (s *WeatherProxyImpl) GetWeather() (models.WeatherModel, error) {
	/*if s.apiKey == "" {
		return models.WeatherModel{}, fmt.Errorf("API key is not set or empty")
	}*/


	OpenWeatherApi := os.Getenv("OPEN_WEATHER_API")
	resp, err := http.Get(BaseURL + WeatherEndpoint + Parameters + APIParameter + OpenWeatherApi)
	if err != nil {
		return models.WeatherModel{}, err
	}
	/*resp, err := http.Get(BaseURL + WeatherEndpoint + Parameters + APIParameter + s.apiKey)
	if err != nil {
		return models.WeatherModel{}, err
	}*/
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			panic("Failed to close the body")
		}
	}(resp.Body)

	var weather models.WeatherModel
	if err := json.NewDecoder(resp.Body).Decode(&weather); err != nil {
		return models.WeatherModel{}, err
	}

	return weather, nil
}
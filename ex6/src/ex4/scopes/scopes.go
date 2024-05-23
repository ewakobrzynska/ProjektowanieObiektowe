package scopes

import "gorm.io/gorm"

func WithAllSubmodels(db *gorm.DB) *gorm.DB {
	return db.Preload("Coord", "Weather",  "Wind", "Rain", "Clouds")
}

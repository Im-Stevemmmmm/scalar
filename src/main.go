package main

import (
	"transit.com/parser"
	options "transit.com/settings"
)

func main() {
	o := options.ParseOptions()
	parser.ParseCSV(o)
}

package parser

import (
	"encoding/csv"
	"io"
	"log"
	"os"
	"regexp"
	"strings"

	options "transit.com/settings"
)

// ParseCSV parses the specified CSV file and normalizes the specified columns.
func ParseCSV(options options.Options) {
	inputFile, err := os.Open(options.InputFile)
	if err != nil {
		log.Fatalln("Failed to open the input CSV file.")
	}

	r := csv.NewReader(inputFile)
	cols, err := r.Read()
	handleReaderErr(err)

	pos := make([]int, 0)
	for i, col := range cols {
		for _, inCol := range options.Columns {
			if col == inCol {
				pos = append(pos, i)
			}
		}
	}

	delimiters := strings.Join(options.Delimiters, "|")
	f, err := os.OpenFile(options.OutputFile, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		log.Fatalln(err)
	}
	defer f.Close()

	writeToFile(f, strings.Join(cols, ",")+"\n")

	for {
		record, err := r.Read()
		exit := handleReaderErr(err)
		if exit {
			break
		}
		for _, item := range pos {
			tokens := splitRecord(delimiters, record[item])
			// TODO Write each CSV and normalize
			for _, t := range tokens {
				writeToFile(f, t)
			}
		}
	}
}

func writeToFile(f *os.File, s string) {
	if _, err := f.WriteString(s); err != nil {
		log.Println(err)
	}
}

func splitRecord(delims string, r string) []string {
	re := regexp.MustCompile(delims)

	split := re.Split(r, -1)
	set := []string{}

	for i := range split {
		set = append(set, split[i])
	}

	return set
}

func handleReaderErr(err error) bool {
	if err == io.EOF {
		return true
	}
	if err != nil {
		log.Fatal(err)
	}
	return false
}

func splitAny(s string, seps string) []string {
	splitter := func(r rune) bool {
		return strings.ContainsRune(seps, r)
	}
	return strings.FieldsFunc(s, splitter)
}

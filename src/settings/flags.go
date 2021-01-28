package settings

import (
	"flag"
	"log"
	"os"
	"strings"
)

// Options is the required data to run Transit.
type Options struct {
	InputFile  string
	OutputFile string
	Delimiters []string
	Columns    []string
}

// ParseOptions parses all of the options for Transit, wether its reading from
// the specified flags or reading the config from a JSON file.
func ParseOptions() Options {
	return parseCLIFlags()
}

func parseCLIFlags() Options {
	if len(os.Args) < 2 {
		log.Fatalln("No input file specified.")
	}

	flags := flag.NewFlagSet("input-file", flag.ExitOnError)

	input := os.Args[1]
	output := flags.String("output", "out.csv", "The file to output result.")
	flags.StringVar(output, "o", "out.csv", "The file to output result.")

	var delimiters arrayFlag
	flags.Var(&delimiters, "delimiter", "Defines a delimiter.")
	flags.Var(&delimiters, "D", "Defines a delimiter.")

	var columns arrayFlag
	flags.Var(&columns, "column", "Defines a delimiter.")
	flags.Var(&columns, "C", "Defines a delimiter.")

	flags.Parse(os.Args[2:])

	return Options{InputFile: input, OutputFile: *output, Delimiters: delimiters, Columns: columns}
}

func parseJSONFile() Options {
	return Options{InputFile: "Hellow", OutputFile: "World"}
}

type arrayFlag []string

func (a *arrayFlag) String() string {
	var combined string

	for i := 0; i < len(*a); i++ {
		combined += (*a)[i] + ","
	}

	return strings.TrimSuffix(combined, ",")
}

func (a *arrayFlag) Set(value string) error {
	*a = append(*a, value)
	return nil
}

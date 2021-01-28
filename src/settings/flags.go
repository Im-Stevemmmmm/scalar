package settings

type Options struct {
	InputFile   string
	OutputFile  string
	FileOptions fileOptions
}

type fileOptions struct {
	filePath string
}

func ParseCLIFlags() Options {
	return Options{InputFile: "Hellow", OutputFile: "World"}
}

func ParseJsonFile() Options {
	return Options{InputFile: "Hellow", OutputFile: "World"}
}

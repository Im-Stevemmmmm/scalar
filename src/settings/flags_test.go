package settings

import "testing"

func TestFlagConcatenation(t *testing.T) {
	var flags arrayFlag = []string{"a", "b", "c"}

	res := flags.String()
	if res != "a,b,c " {
		t.Errorf("flag array concatenation = %s; want a,b,c", res)
	}
}

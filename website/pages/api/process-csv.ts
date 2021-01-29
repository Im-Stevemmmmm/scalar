import type { NextApiRequest, NextApiResponse } from "next";
import shell, { ShellString } from "shelljs";

interface CLIOptions {
    OutFileName: string;
    NewFile: boolean;
    Delimiters: boolean;
    Columns: string[];
}

interface CLIResult {
    Successful: boolean;
    ExitCode: number;
}

const handleShellExecution = ({ code }: ShellString): CLIResult => ({
    Successful: code == 0,
    ExitCode: code,
});

export default (req: NextApiRequest, res: NextApiResponse<CLIResult>) => {
    const options = req.body as CLIOptions;
    const scriptName = "i.sh";

    const chmodResult = handleShellExecution(
        shell.exec(`chmod +x ${scriptName}`)
    );
    if (!chmodResult.Successful) {
        return res.json(chmodResult);
    }

    const scriptResult = handleShellExecution(
        shell.exec(`./${scriptName} input.csv ${accumulateFlags(options)}`)
    );
    if (!scriptResult.Successful) {
        return res.json(scriptResult);
    }

    return res.json({
        Successful: true,
        ExitCode: 0,
    });
};

const accumulateFlags = ({
    Columns,
    Delimiters,
    NewFile,
    OutFileName,
}: CLIOptions) => {};

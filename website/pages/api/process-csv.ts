import type { NextApiRequest, NextApiResponse } from "next";
import shell from "shelljs";

type Body = {
    columns: string[];
    newFile: boolean;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body as Body;
    const scriptName = "i.sh";

    shell.exec(`chmod +x ${scriptName}`);
    shell.exec(`./${scriptName}`);

    res.json({
        successful: true,
    });
};

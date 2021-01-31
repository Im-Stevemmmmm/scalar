import { Review } from "api/api-types";
import { Db, FilterQuery } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "utils/mongo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { publisher },
    } = req;

    const { db } = await connectToDatabase();

    const reviews = db.collection("reviews");

    if (publisher) {
        const result = await reviews.findOne<Review>(<FilterQuery<Review>>{
            publisher,
        });

        return res.json(result);
    } else {
        const result = await reviews.find<Review>().toArray();

        return res.json(result);
    }
};

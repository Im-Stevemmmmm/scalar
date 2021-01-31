type MongoDocument = { _id: string };

export interface Review extends MongoDocument {
    publisher: string;
    rating: number;
    body: string;
    featured: boolean;
}

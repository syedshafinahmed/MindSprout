import { MongoClient, ServerApiVersion, Collection, Document } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://hkadmin:b19xCbyB6peGu1jb@zyra.l75hwjs.mongodb.net/?appName=Zyra";
const dbName = process.env.DBNAME || "herokidzdb";

export const collections = {
  PRODUCTS: "products",
} as const;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export const dbConnect = async <T extends Document = Document>(
  cname: string
): Promise<Collection<T>> => {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName).collection<T>(cname);
};

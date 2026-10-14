import { Account, Client } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setPlatform(process.env.APPWRITE_PROJECT_PLATFORM!);

export const account = new Account(client);

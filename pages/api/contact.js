import { MongoClient } from "mongodb";

async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://dbUser:<GMisWIzNsWjfQ41h>@cluster0.wguti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch {
      res.status(500).json({ message: "Connecting to the database failed." });
      return;
    }
    try {
      await client.db("blogs").collection("messages").insertOne(newMessage);
      client.close();
      res.status(201).json({ message: "Message stored!", message: newMessage });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
    }
  }
}

export default handler;

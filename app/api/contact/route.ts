import { NextResponse } from "next/server";
import connectDB from "@/lib/Database";
import Contact from "@/schema/Contact";
export  async function POST(req: Request) {
    try {
        connectDB();
        const { name, email,subject, phone, message } = await req.json();
        if (!name || !email || !subject || !phone || !message) {
            return NextResponse.json({ message: "All fields are required" })
        }

      const newContact = await Contact.create({
        name,
        email,
        subject,
        phone,
        message
      })
      const savedContact = await newContact.save()

      return NextResponse.json({ message: "Contact created successfully",savedContact }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
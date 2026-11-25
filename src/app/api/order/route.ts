import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      country,
      services,
      imageCount,
      deliveryDate,
      editingStyle,
      driveLink,
      additionalNotes,
    } = body;

    // Validate essential fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required contact details." },
        { status: 400 }
      );
    }

    // Prepare log / structure for production mailing (e.g. Resend, Sendgrid or Nodemailer)
    const orderPayload = {
      timestamp: new Date().toISOString(),
      recipient: "srkvisions05@gmail.com",
      client: {
        fullName,
        companyName,
        email,
        phone,
        country,
      },
      specifications: {
        services,
        imageCount,
        deliveryDate,
        editingStyle,
        driveLink,
        additionalNotes,
      },
    };

    console.info("SRK Visions — New Project Commission Order Received:", orderPayload);

    // If RESEND_API_KEY is configured in env, trigger direct email delivery
    if (process.env.RESEND_API_KEY) {
      // In production with an active Resend key:
      /*
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SRK Visions Orders <orders@srkvisions.com>",
          to: ["srkvisions05@gmail.com"],
          subject: `New Project Order from ${fullName} (${companyName || country})`,
          text: JSON.stringify(orderPayload, null, 2),
        }),
      });
      */
    }

    return NextResponse.json({
      success: true,
      message: "Order brief successfully logged.",
      orderId: `SRK-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Order processing error:", error);
    return NextResponse.json(
      { error: "Failed to process project brief." },
      { status: 500 }
    );
  }
}

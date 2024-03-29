// pages/api/subscribeUser.js
export default async function subscribeUser(req: any, res: any) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
  
    try {
      const AUDIENCE_ID = "b3e3b368c0";
      const API_KEY = "904d5a73c4d491249a11db388f931e87-us22";
      const DATACENTER = "us22";
      const data = {
        email_address: email,
        status: "subscribed",
      };
  
      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
  
      const responseData = await response.json();
  
      if (!response.ok) {
        return res
          .status(response.status)
          .json({
            error: responseData.detail || "Error subscribing to newsletter.",
          });
      }
  
      return res.status(201).json({ message: "Subscribed successfully!" });
    } catch (error) {
      //   return res.status(500).json({ error: error.message || 'An unexpected error occurred.' });
    }
  }
  
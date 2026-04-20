const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Wideon attivo 🚀");
});

app.get("/opportunities", (req, res) => {
  res.json([
    {
      product: "AI Pet Camera",
      markets: { USA: "rising", Italy: "not present", UK: "rising" },
      why: "Pet + AI is exploding on TikTok.",
      how_to_start: "Shopify + TikTok ads",
      time_window: "2-4 months"
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Backend running on " + PORT);
});